import { css, html } from 'lit'
import { color } from '../../utils/Theme'

// -- static styles ------------------------------------------------ //
export default css`
  .w3m-button {
    border-radius: 28px;
    height: 28px;
    padding: 0 10px;
  }

  .w3m-button::after {
    border-radius: 28px;
  }

  .w3m-button:disabled::after {
    background-color: transparent;
  }
`

// -- dynamic styles ----------------------------------------------- //
export function dynamicStyles() {
  const { foreground, background, overlay } = color()

  return html`<style>
    .w3m-button-fill {
      background-color: ${foreground.accent};
    }

    .w3m-button-ghost {
      background-color: ${background.accent};
    }

    .w3m-button::after {
      box-shadow: inset 0 0 0 1px ${overlay.thin};
    }

    .w3m-button-fill:hover::after {
      background-color: ${overlay.thick};
    }

    .w3m-button-ghost:hover::after {
      background-color: ${overlay.thin};
    }

    .w3m-button:disabled {
      background-color: ${background[3]};
    }
  </style>`
}
