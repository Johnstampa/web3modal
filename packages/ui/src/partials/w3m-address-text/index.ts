import { AccountCtrl } from '@web3modal/core'
import { html, LitElement } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { ThemeUtil } from '../../utils/ThemeUtil'
import { UiUtil } from '../../utils/UiUtil'

@customElement('w3m-address-text')
export class W3mAddressText extends LitElement {
  public static styles = [ThemeUtil.globalCss]

  // -- state & properties ------------------------------------------- //
  @state() private address?: string = undefined
  @property() public variant?: 'button' | 'modal' = 'button'

  // -- lifecycle ---------------------------------------------------- //
  public constructor() {
    super()
    this.address = AccountCtrl.state.address
    this.unsubscribeAccount = AccountCtrl.subscribe(({ address }) => {
      this.address = address
    })
  }

  public disconnectedCallback() {
    this.unsubscribeAccount?.()
  }

  // -- private ------------------------------------------------------ //
  private readonly unsubscribeAccount?: () => void = undefined

  // -- render ------------------------------------------------------- //
  protected render() {
    const isButton = this.variant === 'button'

    return html`
      <w3m-text
        variant=${isButton ? 'medium-normal' : 'large-bold'}
        color=${isButton ? 'inverse' : 'primary'}
      >
        ${UiUtil.truncate(this.address ?? '')}
      </w3m-text>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'w3m-address-text': W3mAddressText
  }
}
