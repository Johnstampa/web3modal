import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { ThemeUtil } from '../../utils/ThemeUtil'
import styles from './styles.css'

@customElement('w3m-avatar')
export class W3mAvatar extends LitElement {
  public static styles = [ThemeUtil.globalCss, styles]

  // -- state & properties ------------------------------------------- //
  @property() public size?: 'medium' | 'small' = 'small'
  @property() public address?: string = undefined
  @property() public nickname?: string = undefined

  // -- render ------------------------------------------------------- //
  protected render() {
    return html` <div class="w3m-avatar"></div>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'w3m-avatar': W3mAvatar
  }
}
