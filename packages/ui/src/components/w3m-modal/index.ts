import { CoreHelpers, ExplorerCtrl, ModalCtrl, RouterCtrl } from '@web3modal/core'
import { html } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { animate } from 'motion'
import { global } from '../../utils/Theme'
import ThemedElement from '../../utils/ThemedElement'
import {
  defaultWalletImages,
  getShadowRootElement,
  isMobileAnimation,
  preloadImage
} from '../../utils/UiHelpers'
import '../w3m-modal-backcard'
import '../w3m-modal-router'
import '../w3m-modal-toast'
import styles, { dynamicStyles } from './styles'

@customElement('w3m-modal')
export class W3mModal extends ThemedElement {
  public static styles = [global, styles]

  // -- state & properties ------------------------------------------- //
  @state() private open = false
  @state() private initialized = false

  // -- lifecycle ---------------------------------------------------- //
  public constructor() {
    super()
    this.unsubscribe = ModalCtrl.subscribe(modalState => {
      if (modalState.open) this.onOpenModalEvent()
      if (!modalState.open) this.onCloseModalEvent()
    })
  }

  public disconnectedCallback() {
    super.disconnectedCallback()
    this.unsubscribe?.()
  }

  // -- private ------------------------------------------------------ //
  private readonly unsubscribe?: () => void = undefined
  private firstOpen = true

  private get overlayEl() {
    return getShadowRootElement(this, '.w3m-modal-overlay')
  }

  private get containerEl() {
    return getShadowRootElement(this, '.w3m-modal-container')
  }

  private onCloseModal(event: PointerEvent) {
    if (event.target === event.currentTarget) ModalCtrl.closeModal()
  }

  private async onOpenModalEvent() {
    this.initialized = true
    await ExplorerCtrl.getWallets({ page: 1, entries: 10, version: 1 })
    const wallets = Object.values(ExplorerCtrl.state.wallets.listings).map(
      ({ image_url }) => image_url.lg
    )
    const defaultWallets = defaultWalletImages()
    await Promise.all([
      CoreHelpers.wait(this.firstOpen ? 300 : 0),
      ...wallets.map(async url => preloadImage(url)),
      ...defaultWallets.map(async url => preloadImage(url))
    ])
    this.open = true
    animate(this.overlayEl, { opacity: [0, 1] }, { duration: 0.2, delay: 0.1 })
    animate(this.containerEl, isMobileAnimation() ? { y: [15, 0] } : { scale: [0.98, 1] }, {
      duration: 0.3,
      delay: 0.1
    })
    document.addEventListener('keydown', this.onKeyDown)
    this.firstOpen = false
  }

  private async onCloseModalEvent() {
    document.removeEventListener('keydown', this.onKeyDown)
    await Promise.all([
      animate(this.containerEl, isMobileAnimation() ? { y: [0, 15] } : { scale: [1, 0.98] }, {
        duration: 0.2
      }).finished,
      animate(this.overlayEl, { opacity: [1, 0] }, { duration: 0.2 }).finished
    ])
    this.open = false
    RouterCtrl.replace('ConnectWallet')
  }
  private onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') ModalCtrl.closeModal()
  }

  // -- render ------------------------------------------------------- //
  protected render() {
    const classes = {
      'w3m-modal-overlay': true,
      'w3m-modal-open': this.open
    }

    return html`
      ${dynamicStyles()}

      <div
        class=${classMap(classes)}
        @click=${this.onCloseModal}
        role="alertdialog"
        aria-modal="true"
      >
        <div class="w3m-modal-container">
          ${this.initialized
            ? html`
                <w3m-modal-backcard></w3m-modal-backcard>
                <div class="w3m-modal-card">
                  ${this.open ? html`<w3m-modal-router></w3m-modal-router>` : null}
                  <w3m-modal-toast></w3m-modal-toast>
                </div>
              `
            : null}
        </div>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'w3m-modal': W3mModal
  }
}
