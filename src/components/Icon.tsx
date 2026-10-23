type IconName =
  | "arrow-up-right"
  | "arrow-right"
  | "arrow-down"
  | "mail"
  | "phone"
  | "github"
  | "linkedin"
  | "whatsapp"
  | "menu"
  | "close"
  | "external"
  | "certificate"
  | "code";

const paths: Record<IconName, React.ReactNode> = {
  "arrow-up-right": (
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M9 7h8v8" />
  ),
  "arrow-right": (
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h15m0 0-6-6m6 6-6 6" />
  ),
  "arrow-down": (
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v15m0 0 6-6m-6 6-6-6" />
  ),
  mail: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 6.5h18v11H3v-11Zm0 .5 9 6 9-6"
    />
  ),
  phone: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 4h3l2 5-2 1a12 12 0 0 0 6 6l1-2 5 2v3a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2Z"
    />
  ),
  github: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 19c-4 1.5-4-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6 0C6.8 2.8 5.8 3.1 5.8 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"
    />
  ),
  linkedin: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 9.5v10M4.5 5.5v.01" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 19.5v-10m0 3.5c0-2 1.4-3.5 3.5-3.5S17 10.9 17 13v6.5" />
    </>
  ),
  whatsapp: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.5L3.5 20.5l1.4-4.3A8.5 8.5 0 1 1 20.5 11.6Z"
    />
  ),
  menu: <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />,
  close: <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6 6 18" />,
  external: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14 5h5v5m0-5-8 8M19 14v5H5V5h5"
    />
  ),
  certificate: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 4h14v10H5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 8h8M8 11h5M12 14v6l2-1.5L16 20v-6" />
    </>
  ),
  code: (
    <path strokeLinecap="round" strokeLinejoin="round" d="m8 8-4 4 4 4m8-8 4 4-4 4m-3-9-2 10" />
  ),
};

export function Icon({
  name,
  className = "h-4 w-4",
  strokeWidth = 1.6,
  filled = false,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
  filled?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={filled ? 0 : strokeWidth}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
