import { svg } from 'lit'
import { color } from './Theme'

export const CLOSE_ICON = svg`
  <svg width="12" height="12" viewBox="0 0 12 12">
    <path
      d="M9.94 11A.75.75 0 1 0 11 9.94L7.414 6.353a.5.5 0 0 1 0-.708L11 2.061A.75.75 0 1 0 9.94 1L6.353 4.586a.5.5 0 0 1-.708 0L2.061 1A.75.75 0 0 0 1 2.06l3.586 3.586a.5.5 0 0 1 0 .708L1 9.939A.75.75 0 1 0 2.06 11l3.586-3.586a.5.5 0 0 1 .708 0L9.939 11Z"
      fill="#fff"
    />
  </svg>
`

export const NOISE_TEXTURE = svg`
  <svg id="w3m-transparent-noise">
    <filter id="w3m-noise">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" />
    </filter>

    <rect width="100%" height="100%" filter="url(#w3m-noise)" />
  </svg>
`

export const WALLET_CONNECT_ICON = svg`
  <svg width="28" height="20" viewBox="0 0 28 20">
    <g clip-path="url(#a)">
      <path
        d="M7.386 6.482c3.653-3.576 9.575-3.576 13.228 0l.44.43a.451.451 0 0 1 0 .648L19.55 9.033a.237.237 0 0 1-.33 0l-.606-.592c-2.548-2.496-6.68-2.496-9.228 0l-.648.634a.237.237 0 0 1-.33 0L6.902 7.602a.451.451 0 0 1 0-.647l.483-.473Zm16.338 3.046 1.339 1.31a.451.451 0 0 1 0 .648l-6.035 5.909a.475.475 0 0 1-.662 0L14.083 13.2a.119.119 0 0 0-.166 0l-4.283 4.194a.475.475 0 0 1-.662 0l-6.035-5.91a.451.451 0 0 1 0-.647l1.338-1.31a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0Z"
        fill="#000000"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#ffffff" d="M0 0h28v20H0z" /></clipPath>
    </defs>
  </svg>
`

export const WALLET_CONNECT_LOGO = svg`
  <svg width="178" height="29" viewBox="0 0 178 29">
    <path
      d="M10.683 7.926c5.284-5.17 13.85-5.17 19.134 0l.636.623a.652.652 0 0 1 0 .936l-2.176 2.129a.343.343 0 0 1-.478 0l-.875-.857c-3.686-3.607-9.662-3.607-13.348 0l-.937.918a.343.343 0 0 1-.479 0l-2.175-2.13a.652.652 0 0 1 0-.936l.698-.683Zm23.633 4.403 1.935 1.895a.652.652 0 0 1 0 .936l-8.73 8.543a.687.687 0 0 1-.956 0L20.37 17.64a.172.172 0 0 0-.239 0l-6.195 6.063a.687.687 0 0 1-.957 0l-8.73-8.543a.652.652 0 0 1 0-.936l1.936-1.895a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .239 0l6.195-6.064a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .24 0l6.195-6.064a.687.687 0 0 1 .956 0ZM48.093 20.948l2.338-9.355c.139-.515.258-1.07.416-1.942.12.872.258 1.427.357 1.942l2.022 9.355h4.181l3.528-13.874h-3.21l-1.943 8.523a24.825 24.825 0 0 0-.456 2.457c-.158-.931-.317-1.625-.495-2.438l-1.883-8.542h-4.201l-2.042 8.542a41.204 41.204 0 0 0-.475 2.438 41.208 41.208 0 0 0-.476-2.438l-1.903-8.542h-3.349l3.508 13.874h4.083ZM63.33 21.304c1.585 0 2.596-.654 3.11-1.605-.059.297-.078.595-.078.892v.357h2.655V15.22c0-2.735-1.248-4.32-4.3-4.32-2.636 0-4.36 1.466-4.52 3.487h2.914c.1-.891.734-1.426 1.705-1.426.911 0 1.407.515 1.407 1.11 0 .435-.258.693-1.03.792l-1.388.159c-2.061.257-3.825 1.01-3.825 3.19 0 1.982 1.645 3.092 3.35 3.092Zm.891-2.041c-.773 0-1.348-.436-1.348-1.19 0-.733.655-1.09 1.645-1.268l.674-.119c.575-.118.892-.218 1.09-.396v.912c0 1.228-.892 2.06-2.06 2.06ZM70.398 7.074v13.874h2.874V7.074h-2.874ZM74.934 7.074v13.874h2.874V7.074h-2.874ZM84.08 21.304c2.735 0 4.5-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922H81.92ZM94.92 21.146c.633 0 1.248-.1 1.525-.179v-2.18c-.218.04-.475.06-.693.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.338v-2.24h-2.338V7.788H91.47v3.448H89.37v2.24h2.1v4.201c0 2.3 1.15 3.469 3.45 3.469ZM104.62 21.304c3.924 0 6.302-2.299 6.599-5.608h-3.111c-.238 1.803-1.506 3.032-3.369 3.032-2.2 0-3.746-1.784-3.746-4.796 0-2.953 1.605-4.638 3.805-4.638 1.883 0 2.953 1.15 3.171 2.834h3.191c-.317-3.448-2.854-5.41-6.342-5.41-3.984 0-7.036 2.695-7.036 7.214 0 4.677 2.676 7.372 6.838 7.372ZM117.449 21.304c2.993 0 5.114-1.882 5.114-5.172 0-3.23-2.121-5.233-5.114-5.233-2.972 0-5.093 2.002-5.093 5.233 0 3.29 2.101 5.172 5.093 5.172Zm0-2.22c-1.327 0-2.18-1.09-2.18-2.952 0-1.903.892-2.973 2.18-2.973 1.308 0 2.2 1.07 2.2 2.973 0 1.862-.872 2.953-2.2 2.953ZM126.569 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.229-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM137.464 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.228-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM149.949 21.304c2.735 0 4.499-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922h-3.984ZM160.876 21.304c3.013 0 4.658-1.645 4.975-4.201h-2.874c-.099 1.07-.713 1.982-2.001 1.982-1.309 0-2.2-1.21-2.2-2.993 0-1.942 1.03-2.933 2.259-2.933 1.209 0 1.803.872 1.883 1.882h2.873c-.218-2.358-1.823-4.142-4.776-4.142-2.874 0-5.153 1.903-5.153 5.193 0 3.25 1.923 5.212 5.014 5.212ZM172.067 21.146c.634 0 1.248-.1 1.526-.179v-2.18c-.218.04-.476.06-.694.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.339v-2.24h-2.339V7.788h-2.854v3.448h-2.1v2.24h2.1v4.201c0 2.3 1.15 3.469 3.449 3.469Z"
      fill="#fff"
    />
  </svg>
`

export const WALLET_CONNECT_ICON_SHADE = svg`
  <svg width="108" height="60" viewBox="0 0 108 60">
    <g filter="url(#b)">
      <path
        d="M37.605 19.588c9.054-8.864 23.733-8.864 32.787 0l1.09 1.067a1.118 1.118 0 0 1 0 1.605l-3.728 3.65a.588.588 0 0 1-.82 0l-1.499-1.469c-6.316-6.184-16.556-6.184-22.873 0l-1.605 1.573a.588.588 0 0 1-.82 0l-3.727-3.65a1.118 1.118 0 0 1 0-1.605l1.195-1.17Zm40.496 7.548 3.317 3.248a1.118 1.118 0 0 1 0 1.605L66.46 46.635a1.177 1.177 0 0 1-1.64 0L54.204 36.24a.294.294 0 0 0-.41 0L43.178 46.635a1.177 1.177 0 0 1-1.64 0L26.58 31.989a1.118 1.118 0 0 1 0-1.606l3.318-3.248a1.177 1.177 0 0 1 1.639 0L42.153 37.53c.113.11.297.11.41 0l10.616-10.395a1.177 1.177 0 0 1 1.64 0L65.434 37.53c.113.11.297.11.41 0l10.617-10.394a1.177 1.177 0 0 1 1.639 0Z"
        fill="#fff"
      />
      <path
        d="M39.44 48.778 24.48 34.132a4.118 4.118 0 0 1 0-5.892l2.1 2.143-2.1-2.143 3.318-3.248m11.641 23.786L27.798 24.992m11.641 23.786a4.177 4.177 0 0 0 5.837 0L54 40.238l8.723 8.54 2.098-2.143m-25.38 2.143 25.38-2.143M27.798 24.992a4.177 4.177 0 0 1 5.837 0l8.723 8.54 8.722-8.54 2.099 2.143m-25.381-2.143 25.38 2.143m11.642 19.5-2.098 2.143a4.177 4.177 0 0 0 5.837 0l14.958-14.646a4.118 4.118 0 0 0 0-5.892L80.2 24.992a4.177 4.177 0 0 0-5.837 0l-8.723 8.54-8.723-8.54-2.08 2.123 2.08-2.123a4.177 4.177 0 0 0-5.837 0l2.099 2.143m11.641 19.5-11.641-19.5m11.657.918 2.099-2.143-2.1 2.143a3.589 3.589 0 0 0 5.018 0l3.728-3.65a4.118 4.118 0 0 0 0-5.892l-1.09-1.066c-10.22-10.007-26.764-10.007-36.984 0l-1.196 1.17a4.118 4.118 0 0 0 0 5.893l3.727 3.65a3.589 3.589 0 0 0 5.017 0l1.606-1.573c5.15-5.042 13.526-5.042 18.675 0l1.5 1.468Z"
        stroke="#fff"
        stroke-width="6"
      />
    </g>
    <defs>
      <filter
        id="b"
        x=".24"
        y="-13.06"
        width="107.518"
        height="86.027"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" />
        <feGaussianBlur stdDeviation="10" />
      </filter>
    </defs>
  </svg>
`

export const WALLET_CONNECT_ICON_GRADIENT = svg`
  <svg width="96" height="68" viewBox="0 0 96 68">
    <path
      d="M25.323 19.597c12.524-12.263 32.83-12.263 45.354 0l1.508 1.476a1.547 1.547 0 0 1 0 2.22l-5.157 5.048a.814.814 0 0 1-1.133 0l-2.075-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.174a.814.814 0 0 1-1.134 0l-5.156-5.048a1.547 1.547 0 0 1 0-2.22l1.655-1.62Zm56.018 10.44 4.59 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.268 0l-14.686-14.38a.407.407 0 0 0-.567 0L33.03 57.012a1.628 1.628 0 0 1-2.268 0L10.07 36.751a1.547 1.547 0 0 1 0-2.22l4.589-4.494a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"
      fill="#03ACDA"
    />
    <path
      d="M25.323 19.597c12.524-12.263 32.83-12.263 45.354 0l1.508 1.476a1.547 1.547 0 0 1 0 2.22l-5.157 5.048a.814.814 0 0 1-1.133 0l-2.075-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.174a.814.814 0 0 1-1.134 0l-5.156-5.048a1.547 1.547 0 0 1 0-2.22l1.655-1.62Zm56.018 10.44 4.59 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.268 0l-14.686-14.38a.407.407 0 0 0-.567 0L33.03 57.012a1.628 1.628 0 0 1-2.268 0L10.07 36.751a1.547 1.547 0 0 1 0-2.22l4.589-4.494a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"
      fill="url(#c)"
    />
    <path
      d="M25.323 19.597c12.524-12.263 32.83-12.263 45.354 0l1.508 1.476a1.547 1.547 0 0 1 0 2.22l-5.157 5.048a.814.814 0 0 1-1.133 0l-2.075-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.174a.814.814 0 0 1-1.134 0l-5.156-5.048a1.547 1.547 0 0 1 0-2.22l1.655-1.62Zm56.018 10.44 4.59 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.268 0l-14.686-14.38a.407.407 0 0 0-.567 0L33.03 57.012a1.628 1.628 0 0 1-2.268 0L10.07 36.751a1.547 1.547 0 0 1 0-2.22l4.589-4.494a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"
      fill="url(#d)"
    />
    <path
      d="M25.323 19.597c12.524-12.263 32.83-12.263 45.354 0l1.508 1.476a1.547 1.547 0 0 1 0 2.22l-5.157 5.048a.814.814 0 0 1-1.133 0l-2.075-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.174a.814.814 0 0 1-1.134 0l-5.156-5.048a1.547 1.547 0 0 1 0-2.22l1.655-1.62Zm56.018 10.44 4.59 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.268 0l-14.686-14.38a.407.407 0 0 0-.567 0L33.03 57.012a1.628 1.628 0 0 1-2.268 0L10.07 36.751a1.547 1.547 0 0 1 0-2.22l4.589-4.494a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"
      fill="url(#e)"
    />
    <path
      d="M25.323 19.597c12.524-12.263 32.83-12.263 45.354 0l1.508 1.476a1.547 1.547 0 0 1 0 2.22l-5.157 5.048a.814.814 0 0 1-1.133 0l-2.075-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.174a.814.814 0 0 1-1.134 0l-5.156-5.048a1.547 1.547 0 0 1 0-2.22l1.655-1.62Zm56.018 10.44 4.59 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.268 0l-14.686-14.38a.407.407 0 0 0-.567 0L33.03 57.012a1.628 1.628 0 0 1-2.268 0L10.07 36.751a1.547 1.547 0 0 1 0-2.22l4.589-4.494a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"
      fill="url(#f)"
    />
    <path
      d="M25.323 19.597c12.524-12.263 32.83-12.263 45.354 0l1.508 1.476a1.547 1.547 0 0 1 0 2.22l-5.157 5.048a.814.814 0 0 1-1.133 0l-2.075-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.174a.814.814 0 0 1-1.134 0l-5.156-5.048a1.547 1.547 0 0 1 0-2.22l1.655-1.62Zm56.018 10.44 4.59 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.268 0l-14.686-14.38a.407.407 0 0 0-.567 0L33.03 57.012a1.628 1.628 0 0 1-2.268 0L10.07 36.751a1.547 1.547 0 0 1 0-2.22l4.589-4.494a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"
      fill="url(#g)"
    />
    <path
      d="M25.323 19.597c12.524-12.263 32.83-12.263 45.354 0l1.508 1.476a1.547 1.547 0 0 1 0 2.22l-5.157 5.048a.814.814 0 0 1-1.133 0l-2.075-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.174a.814.814 0 0 1-1.134 0l-5.156-5.048a1.547 1.547 0 0 1 0-2.22l1.655-1.62Zm56.018 10.44 4.59 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.268 0l-14.686-14.38a.407.407 0 0 0-.567 0L33.03 57.012a1.628 1.628 0 0 1-2.268 0L10.07 36.751a1.547 1.547 0 0 1 0-2.22l4.589-4.494a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"
      fill="url(#h)"
    />
    <path
      d="M25.323 19.597c12.524-12.263 32.83-12.263 45.354 0l1.508 1.476a1.547 1.547 0 0 1 0 2.22l-5.157 5.048a.814.814 0 0 1-1.133 0l-2.075-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.174a.814.814 0 0 1-1.134 0l-5.156-5.048a1.547 1.547 0 0 1 0-2.22l1.655-1.62Zm56.018 10.44 4.59 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.268 0l-14.686-14.38a.407.407 0 0 0-.567 0L33.03 57.012a1.628 1.628 0 0 1-2.268 0L10.07 36.751a1.547 1.547 0 0 1 0-2.22l4.589-4.494a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"
      fill="url(#i)"
    />
    <path
      d="M25.672 19.954c12.33-12.072 32.326-12.072 44.656 0l1.507 1.476a1.047 1.047 0 0 1 0 1.506l-5.156 5.048a.314.314 0 0 1-.434 0l-2.075-2.03c-8.931-8.746-23.408-8.746-32.34 0l-2.221 2.174a.314.314 0 0 1-.435 0l-5.156-5.048a1.047 1.047 0 0 1 0-1.506l1.654-1.62Zm55.32 10.44 4.588 4.494a1.047 1.047 0 0 1 0 1.506l-20.692 20.26a1.128 1.128 0 0 1-1.568 0l-14.687-14.38a.907.907 0 0 0-1.266 0L32.68 56.655a1.128 1.128 0 0 1-1.568 0l-20.694-20.26a1.047 1.047 0 0 1 0-1.506l4.59-4.493a1.128 1.128 0 0 1 1.568 0l14.686 14.379a.907.907 0 0 0 1.267 0l-.35-.357.35.357 14.686-14.38a1.128 1.128 0 0 1 1.568 0l14.686 14.38a.907.907 0 0 0 1.267 0l14.686-14.38a1.128 1.128 0 0 1 1.568 0Z"
      stroke=${color().overlay.thin}
      fill="none"
    />
    <defs>
      <radialGradient
        id="c"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="rotate(-127.117 46.423 12.462) scale(23.2002 37.853)"
      >
        <stop stop-color="#70D75B" />
        <stop offset=".477" stop-color="#7CD94E" />
        <stop offset="1" stop-color="#7CD94E" stop-opacity="0" />
      </radialGradient>
      <radialGradient
        id="d"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(-6.00004 9.99997 -27.2315 -16.33906 53 29)"
      >
        <stop stop-color="#4567FB" />
        <stop offset=".924" stop-color="#4567FB" />
        <stop offset="1" stop-color="#4567FB" stop-opacity="0" />
      </radialGradient>
      <radialGradient
        id="e"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(-16.4999 23.00013 -57.24754 -41.06839 55.5 9)"
      >
        <stop stop-color="#C4397E" />
        <stop offset=".322" stop-color="#C6397F" />
        <stop offset="1" stop-color="#C6397F" stop-opacity="0" />
      </radialGradient>
      <radialGradient
        id="f"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(-12.99987 17.00005 -18.4666 -14.12134 76.5 29.5)"
      >
        <stop stop-color="#F651CC" />
        <stop offset=".681" stop-color="#F64ECC" />
        <stop offset="1" stop-color="#F64ECC" stop-opacity="0" />
      </radialGradient>
      <radialGradient
        id="g"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="rotate(135 31.583 22.748) scale(13.435 14.9028)"
      >
        <stop stop-color="#C251FB" />
        <stop offset=".873" stop-color="#C251FB" />
        <stop offset="1" stop-color="#C251FB" stop-opacity="0" />
      </radialGradient>
      <radialGradient
        id="h"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(24.49996 11.49999 -18.76319 39.97372 8.5 33)"
      >
        <stop stop-color="#8551EC" />
        <stop offset=".72" stop-color="#8551EC" />
        <stop offset="1" stop-color="#8551EC" stop-opacity="0" />
      </radialGradient>
      <radialGradient
        id="i"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(8.49998 8.99999 -14.68422 13.86842 26.5 18)"
      >
        <stop stop-color="#10937D" />
        <stop offset=".48" stop-color="#10937D" />
        <stop offset="1" stop-color="#10937D" stop-opacity="0" />
      </radialGradient>
    </defs>
  </svg>
`

export const COPY_ICON = svg`
  <svg width="14" height="14" viewBox="0 0 14 14">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.003 4.005c.012-1.225.074-1.936.391-2.491a3 3 0 0 1 1.12-1.12C6.204 0 7.136 0 9 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C14 2.204 14 3.136 14 5s0 2.795-.394 3.486a3 3 0 0 1-1.12 1.12c-.555.317-1.266.379-2.491.391l.002.003c-.012 1.222-.075 1.932-.391 2.486a3 3 0 0 1-1.12 1.12C7.796 14 6.864 14 5 14s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C0 11.796 0 10.864 0 9s0-2.795.394-3.486a3 3 0 0 1 1.12-1.12c.554-.316 1.264-.379 2.486-.391l.003.002ZM9 8.5c-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.045-.08-.113-.243-.154-.693C5.501 6.58 5.5 5.959 5.5 5c0-.959.001-1.58.043-2.05.04-.45.109-.613.154-.693a1.5 1.5 0 0 1 .56-.56c.08-.045.243-.113.693-.154C7.42 1.501 8.041 1.5 9 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.045.08.113.243.154.693.042.47.043 1.091.043 2.05 0 .959-.001 1.58-.043 2.05-.04.45-.109.613-.154.693a1.5 1.5 0 0 1-.56.56c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043ZM4 5.503a13.77 13.77 0 0 0-1.05.04c-.45.04-.613.109-.693.154a1.5 1.5 0 0 0-.56.56c-.045.08-.113.243-.154.693C1.501 7.42 1.5 8.041 1.5 9c0 .959.001 1.58.043 2.05.04.45.109.613.154.693a1.5 1.5 0 0 0 .56.56c.08.045.243.113.693.154.47.042 1.091.043 2.05.043.959 0 1.58-.001 2.05-.043.45-.04.613-.109.693-.154a1.5 1.5 0 0 0 .56-.56c.045-.08.113-.242.154-.693.025-.283.035-.619.04-1.05-1.534-.003-2.358-.037-2.983-.394a3 3 0 0 1-1.12-1.12c-.357-.625-.39-1.449-.394-2.983Z"
      fill="#fff"
    />
  </svg>
`

export const BACK_ICON = svg`
  <svg width="10" height="18" viewBox="0 0 10 18">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.735.179a.75.75 0 0 1 .087 1.057L2.92 8.192a1.25 1.25 0 0 0 0 1.617l5.902 6.956a.75.75 0 1 1-1.144.97L1.776 10.78a2.75 2.75 0 0 1 0-3.559L7.678.265A.75.75 0 0 1 8.735.18Z"
      fill="#fff"
    />
  </svg>
`

export const RETRY_ICON = svg`
  <svg width="15" height="16" viewBox="0 0 15 16">
    <path
      d="M6.464 2.03A.75.75 0 0 0 5.403.97L2.08 4.293a1 1 0 0 0 0 1.414L5.403 9.03a.75.75 0 0 0 1.06-1.06L4.672 6.177a.25.25 0 0 1 .177-.427h2.085a4 4 0 1 1-3.93 4.746c-.077-.407-.405-.746-.82-.746-.414 0-.755.338-.7.748a5.501 5.501 0 1 0 5.45-6.248H4.848a.25.25 0 0 1-.177-.427L6.464 2.03Z"
      fill="#fff"
    />
  </svg>
`

export const DESKTOP_ICON = svg`
  <svg width="16" height="16" viewBox="0 0 16 16">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0 5.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C2.204 1 3.13 1 4.98 1h6.04c1.85 0 2.775 0 3.466.394a3 3 0 0 1 1.12 1.12C16 3.204 16 4.13 16 5.98v1.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C13.796 12 12.87 12 11.02 12H4.98c-1.85 0-2.775 0-3.466-.394a3 3 0 0 1-1.12-1.12C0 9.796 0 8.87 0 7.02V5.98ZM4.98 2.5h6.04c.953 0 1.568.001 2.034.043.446.04.608.108.69.154a1.5 1.5 0 0 1 .559.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033v1.04c0 .952-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.046-.243.114-.69.154-.466.042-1.08.043-2.033.043H4.98c-.952 0-1.568-.001-2.034-.043-.446-.04-.608-.108-.69-.154a1.5 1.5 0 0 1-.559-.56c-.046-.08-.114-.243-.154-.69-.042-.465-.043-1.08-.043-2.033V5.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.046.243-.114.69-.154.465-.042 1.08-.043 2.033-.043Z"
      fill="#fff"
    />
    <path
      d="M4 14.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z"
      fill="#fff"
    />
  </svg>
`

export const MOBILE_ICON = svg`
  <svg width="16" height="16" viewBox="0 0 16 16">
    <path d="M6.75 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" fill="#fff" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3 4.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C5.204 0 6.136 0 8 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C13 2.204 13 3.13 13 4.98v6.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C10.796 16 9.864 16 8 16s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C3 13.796 3 12.87 3 11.02V4.98Zm8.5 0v6.04c0 .953-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.046-.08-.114-.243-.154-.69-.042-.466-.043-1.08-.043-2.033V4.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.045.243-.113.693-.154C6.42 1.501 7.041 1.5 8 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033Z"
      fill="#fff"
    />
  </svg>
`

export const ARROW_DOWN_ICON = svg`
  <svg width="14" height="14" viewBox="0 0 14 14">
    <path
      d="M2.28 7.47a.75.75 0 0 0-1.06 1.06l5.25 5.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0-1.06-1.06l-3.544 3.543a.25.25 0 0 1-.426-.177V.75a.75.75 0 0 0-1.5 0v10.086a.25.25 0 0 1-.427.176L2.28 7.47Z"
      fill="#fff"
    />
  </svg>
`

export const ARROW_UP_RIGHT_ICON = svg`
  <svg width="15" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.5 1.75A.75.75 0 0 1 5.25 1H12a1.5 1.5 0 0 1 1.5 1.5v6.75a.75.75 0 0 1-1.5 0V4.164a.25.25 0 0 0-.427-.176L4.061 11.5A.75.75 0 0 1 3 10.44l7.513-7.513a.25.25 0 0 0-.177-.427H5.25a.75.75 0 0 1-.75-.75Z"
      fill="#fff"
    />
  </svg>
`

export const ARROW_RIGHT_ICON = svg`
  <svg width="6" height="14" viewBox="0 0 6 14">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.181 1.099a.75.75 0 0 1 1.024.279l2.433 4.258a2.75 2.75 0 0 1 0 2.729l-2.433 4.257a.75.75 0 1 1-1.303-.744L4.335 7.62a1.25 1.25 0 0 0 0-1.24L1.902 2.122a.75.75 0 0 1 .28-1.023Z"
      fill="#fff"
    />
  </svg>
`

export const QRCODE_ICON = svg`
  <svg width="25" height="24" viewBox="0 0 25 24">
    <path
      d="M23.748 9a.748.748 0 0 0 .748-.752c-.018-2.596-.128-4.07-.784-5.22a6 6 0 0 0-2.24-2.24c-1.15-.656-2.624-.766-5.22-.784a.748.748 0 0 0-.752.748c0 .414.335.749.748.752 1.015.007 1.82.028 2.494.088.995.09 1.561.256 1.988.5.7.398 1.28.978 1.679 1.678.243.427.41.993.498 1.988.061.675.082 1.479.09 2.493a.753.753 0 0 0 .75.749ZM3.527.788C4.677.132 6.152.022 8.747.004A.748.748 0 0 1 9.5.752a.753.753 0 0 1-.749.752c-1.014.007-1.818.028-2.493.088-.995.09-1.561.256-1.988.5-.7.398-1.28.978-1.679 1.678-.243.427-.41.993-.499 1.988-.06.675-.081 1.479-.088 2.493A.753.753 0 0 1 1.252 9a.748.748 0 0 1-.748-.752c.018-2.596.128-4.07.784-5.22a6 6 0 0 1 2.24-2.24ZM1.252 15a.748.748 0 0 0-.748.752c.018 2.596.128 4.07.784 5.22a6 6 0 0 0 2.24 2.24c1.15.656 2.624.766 5.22.784a.748.748 0 0 0 .752-.748.753.753 0 0 0-.749-.752c-1.014-.007-1.818-.028-2.493-.089-.995-.089-1.561-.255-1.988-.498a4.5 4.5 0 0 1-1.679-1.68c-.243-.426-.41-.992-.499-1.987-.06-.675-.081-1.479-.088-2.493A.753.753 0 0 0 1.252 15ZM22.996 15.749a.753.753 0 0 1 .752-.749c.415 0 .751.338.748.752-.018 2.596-.128 4.07-.784 5.22a6 6 0 0 1-2.24 2.24c-1.15.656-2.624.766-5.22.784a.748.748 0 0 1-.752-.748c0-.414.335-.749.748-.752 1.015-.007 1.82-.028 2.494-.089.995-.089 1.561-.255 1.988-.498a4.5 4.5 0 0 0 1.679-1.68c.243-.426.41-.992.498-1.987.061-.675.082-1.479.09-2.493Z"
      fill="#fff"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7 4a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 11h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 4H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1ZM13.5 6.5A2.5 2.5 0 0 1 16 4h2a2.5 2.5 0 0 1 2.5 2.5v2A2.5 2.5 0 0 1 18 11h-2a2.5 2.5 0 0 1-2.5-2.5v-2Zm2.5-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1ZM7 13a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 20h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 13H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z"
      fill="#fff"
    />
    <path
      d="M13.5 15.5c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572C15.303 13 15.535 13 16 13v2.5h-2.5ZM18 13c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89H18V13ZM18 17.5h2.5c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572C18.697 20 18.465 20 18 20v-2.5ZM13.5 17.5H16V20c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572c-.038-.193-.038-.425-.038-.89Z"
      fill="#fff"
    />
  </svg>
`

export const WALLET_ICON = svg`
  <svg width="15" height="14" viewBox="0 0 15 14">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M.5 9.2v-3h.001c.009-1.857.07-2.886.524-3.682a4 4 0 0 1 1.493-1.493C3.44.5 4.673.5 7.14.5h3.735c.58 0 .871 0 1.114.04a3 3 0 0 1 2.47 2.471c.041.243.041.533.041 1.114 0 .58 0 .871-.04 1.114a3 3 0 0 1-2.471 2.47c-.243.041-.533.041-1.114.041h-.777c.177.307.302.648.362 1.011.04.243.04.533.04 1.114 0 .58 0 .871-.04 1.114a3 3 0 0 1-2.471 2.47c-.243.041-.533.041-1.114.041H4.367A3.867 3.867 0 0 1 .5 9.633V9.2ZM7.14 2h3.735c.64 0 .779.005.87.02a1.5 1.5 0 0 1 1.235 1.236c.015.09.02.229.02.869s-.005.779-.02.87a1.5 1.5 0 0 1-1.236 1.235c-.09.015-.229.02-.869.02H3.883c-.697 0-1.345.21-1.883.572V6.25h.001c.003-.791.015-1.383.059-1.867.056-.629.157-.926.268-1.122a2.5 2.5 0 0 1 .933-.933c.196-.111.493-.212 1.122-.268C5.033 2 5.88 2 7.14 2Zm-.265 5.75H3.883C2.843 7.75 2 8.593 2 9.633A2.367 2.367 0 0 0 4.367 12h2.508c.64 0 .779-.005.87-.02a1.5 1.5 0 0 0 1.235-1.236c.015-.09.02-.229.02-.869s-.005-.779-.02-.87A1.5 1.5 0 0 0 7.744 7.77c-.09-.015-.229-.02-.869-.02Z"
      fill="#fff"
    />
  </svg>
`

export const HELP_ICON = svg`
  <svg width="17" height="16" viewBox="0 0 17 16">
    <path
      d="M4.889 2.595a6.5 6.5 0 0 1 8.207 10.001.75.75 0 0 0 1.06 1.06 8 8 0 1 0-11.313 0 .75.75 0 0 0 1.06-1.06 6.5 6.5 0 0 1 .986-10Z"
      fill="#fff"
    />
    <path
      d="M8.5 4.25c-1.07 0-2.25.843-2.25 2.25a.75.75 0 0 1-1.5 0c0-2.393 2.02-3.75 3.75-3.75s3.75 1.357 3.75 3.75c0 1.64-1.038 2.466-1.784 3.057-.803.635-1.216.983-1.216 1.693a.75.75 0 0 1-1.5 0c0-1.466.985-2.24 1.681-2.788l.103-.081c.754-.597 1.216-1.02 1.216-1.881 0-1.407-1.18-2.25-2.25-2.25ZM8.5 16a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
      fill="#fff"
    />
  </svg>
`

export const CHECKMARK_ICON = svg`
  <svg width="13" height="12" viewBox="0 0 13 12">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.155.132a.75.75 0 0 1 .232 1.035L5.821 11.535a1 1 0 0 1-1.626.09L.665 7.21a.75.75 0 1 1 1.17-.937L4.71 9.867a.25.25 0 0 0 .406-.023L11.12.364a.75.75 0 0 1 1.035-.232Z"
      fill="#fff"
    />
  </svg>
`

export const ETH_IMG = svg`
  <svg width="60" height="60" viewBox="0 0 60 60">
    <g clip-path="url(#j)">
      <rect width="60" height="60" rx="30" fill="#987DE8" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="m15.48 28.367 11.966-19.3c1.174-1.892 3.927-1.892 5.1 0l11.97 19.306a6 6 0 0 1 .9 3.142v.028a6 6 0 0 1-1.154 3.56L33.227 50.208c-1.599 2.188-4.864 2.188-6.461 0L15.733 35.095a6 6 0 0 1-1.154-3.538v-.029a6 6 0 0 1 .9-3.161Z"
        fill="#fff"
      />
      <path
        d="M30.84 10.112a.992.992 0 0 0-.844-.464V24.5l12.598 5.53c.081-.466-.001-.963-.27-1.398L30.84 10.112Z"
        fill="#643CDD"
      />
      <path
        d="M29.996 9.648a.991.991 0 0 0-.845.465l-11.489 18.53a1.991 1.991 0 0 0-.264 1.387l12.598-5.53V9.648Z"
        fill="#BDADEB"
      />
      <path
        d="M29.996 50.544a.994.994 0 0 0 .808-.41l11.235-15.38c.307-.434-.193-.988-.658-.72L31.49 39.71a2.998 2.998 0 0 1-1.494.398v10.437Z"
        fill="#643CDD"
      />
      <path
        d="M17.966 34.762 29.19 50.134c.2.274.503.41.807.41V40.108a2.998 2.998 0 0 1-1.493-.398l-9.884-5.676c-.468-.27-.971.292-.653.728Z"
        fill="#BDADEB"
      />
      <path
        d="M42.594 30.03 29.996 24.5v13.138a3 3 0 0 0 1.495-.399l10.149-5.83c.525-.31.856-.823.954-1.38Z"
        fill="#401AB3"
      />
      <path
        d="M29.996 37.638V24.462l-12.598 5.566c.098.564.437 1.083.974 1.392l10.13 5.82c.462.265.978.398 1.494.398Z"
        fill="#7C5AE2"
      />
    </g>
    <rect x=".5" y=".5" width="59" height="59" rx="29.5" stroke="#fff" stroke-opacity=".1" />
    <defs>
      <clipPath id="j"><rect width="60" height="60" rx="30" fill="#fff" /></clipPath>
    </defs>
  </svg>
`

export const NFT_IMG = svg`
  <svg width="60" height="60" viewBox="0 0 60 60">
    <g clip-path="url(#k)">
      <rect width="60" height="60" rx="3" fill="#C653C6" />
      <path
        d="M52.094 47.344c0-4.246-1.436-9.557-5.885-12.4a2.876 2.876 0 0 0-1.615-3.891v-.819a4.037 4.037 0 0 0-1.34-3.007 4.75 4.75 0 0 0-2.41-6.252v-5.506c0-6.248-5.065-11.313-11.313-11.313-6.247 0-11.312 5.065-11.312 11.313v2.152a3.343 3.343 0 0 0-1.18 5.045 4.738 4.738 0 0 0-1.633 3.584 4.73 4.73 0 0 0 .956 2.858 5.218 5.218 0 0 0-2.358 6.815c-3.06 4.129-6.098 8.298-6.098 15.64 0 2.668.364 4.856.731 6.385.184.765.368 1.366.509 1.78a12.721 12.721 0 0 0 .225.611l.015.037.005.011.001.004v.002h.001l.92-.393-.92.394.26.606h38.26l.291-.49-.86-.51.86.51v-.001l.002-.002.002-.005.01-.017.035-.06.127-.225c.108-.195.26-.477.441-.835.363-.714.845-1.732 1.328-2.953.959-2.427 1.945-5.725 1.945-9.068Z"
        fill="#E87DE8"
        stroke="#fff"
        stroke-width="2"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M26.5 29.5c-3-.5-5.5-3-5.503-7l.002-7c0-.466 0-.698.026-.893a3 3 0 0 1 2.582-2.582c.195-.026.428-.026.893-.026 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.398 0 2.097 0 2.648.229a3 3 0 0 1 1.624 1.623c.228.552.228 1.25.228 2.649v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.495 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
        fill="#fff"
      />
    </g>
    <rect x=".5" y=".5" width="59" height="59" rx="2.5" stroke="#fff" stroke-opacity=".1" />
    <defs>
      <clipPath id="k"><rect width="60" height="60" rx="3" fill="#fff" /></clipPath>
    </defs>
  </svg>
`

export const DEFI_IMG = svg`
  <svg width="60" height="60" viewBox="0 0 60 60">
    <g clip-path="url(#l)">
      <path
        d="M0 25.01C0 15.76 0 11.133 1.97 7.678a15 15 0 0 1 5.598-5.597C11.023.11 15.648.11 24.9.11h10.2c9.251 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.597C60 11.133 60 15.758 60 25.01v10.2c0 9.252 0 13.877-1.97 17.332a15 15 0 0 1-5.598 5.598c-3.455 1.97-8.08 1.97-17.332 1.97H24.9c-9.251 0-13.877 0-17.332-1.97a14.999 14.999 0 0 1-5.597-5.598C0 49.087 0 44.462 0 35.21v-10.2Z"
        fill="#1DC956"
      />
      <path
        d="M.5 25.01c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.289a14.5 14.5 0 0 1 5.412-5.41c1.639-.936 3.579-1.418 6.289-1.661C16.822.61 20.265.61 24.9.61h10.2c4.635 0 8.078 0 10.795.245 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.579 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.795-.244 2.71-.726 4.65-1.66 6.29a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.412C1.47 50.655.988 48.716.745 46.005.5 43.288.5 39.845.5 35.21v-10.2Z"
        stroke="#fff"
        stroke-opacity=".1"
      />
      <path
        d="M16.109 60c-3.833-.179-6.41-.645-8.541-1.86a15 15 0 0 1-5.598-5.598C.553 50.057.155 46.967.043 41.985l4.146-1.382a4 4 0 0 0 2.48-2.39l4.654-12.409a2 2 0 0 1 2.505-1.195l2.526.842a2 2 0 0 0 2.422-1.003l2.968-5.938c.81-1.62 3.185-1.415 3.705.32l3.774 12.581a2 2 0 0 0 3.025 1.09l3.342-2.228c.27-.18.49-.422.646-.706l5.297-9.712a2 2 0 0 1 1.428-1.016l4.134-.689a2 2 0 0 1 1.61.437l3.892 3.243a2 2 0 0 0 2.694-.122l4.633-4.632C60 19.28 60 21.88 60 25.01v10.2c0 9.252 0 13.877-1.97 17.332a14.998 14.998 0 0 1-5.598 5.598c-2.131 1.215-4.708 1.681-8.54 1.86H16.108Z"
        fill="#2BEE6C"
      />
      <path
        d="M.072 43.03a112.37 112.37 0 0 1-.048-2.093l3.85-1.283a3 3 0 0 0 1.86-1.793l4.653-12.408a3 3 0 0 1 3.758-1.793l2.526.842a1 1 0 0 0 1.21-.501l2.97-5.938c1.214-2.43 4.775-2.123 5.556.48l3.774 12.58a1 1 0 0 0 1.513.545l3.341-2.227a1 1 0 0 0 .323-.353l5.298-9.712a3 3 0 0 1 2.14-1.523l4.135-.69a3 3 0 0 1 2.414.655l3.892 3.244a1 1 0 0 0 1.347-.061l5.28-5.28c.046.845.077 1.752.097 2.732l-3.962 3.962a3 3 0 0 1-4.042.183l-3.893-3.243a1 1 0 0 0-.804-.218l-4.135.689a1 1 0 0 0-.714.507l-5.297 9.712c-.233.427-.565.79-.97 1.06l-3.34 2.228a3 3 0 0 1-4.538-1.635l-3.775-12.58c-.26-.868-1.447-.97-1.852-.16l-2.969 5.937a3 3 0 0 1-3.632 1.505l-2.526-.842a1 1 0 0 0-1.252.597L7.606 38.564a5 5 0 0 1-3.1 2.988L.072 43.029Z"
        fill="#fff"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
        fill="#2BEE6C"
      />
      <path d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" fill="#fff" />
      <path
        d="M45 .283v59.654c-.63.042-1.294.074-2 .098V.185c.706.025 1.37.056 2 .098Z"
        fill="#fff"
      />
      <path
        d="M.5 25.01c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.289a14.5 14.5 0 0 1 5.412-5.41c1.639-.936 3.579-1.418 6.289-1.661C16.822.61 20.265.61 24.9.61h10.2c4.635 0 8.078 0 10.795.245 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.579 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.795-.244 2.71-.726 4.65-1.66 6.29a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.412C1.47 50.655.988 48.716.745 46.005.5 43.288.5 39.845.5 35.21v-10.2Z"
        stroke="#fff"
        stroke-opacity=".1"
      />
    </g>
    <defs>
      <clipPath id="l"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
    </defs>
  </svg>
`
