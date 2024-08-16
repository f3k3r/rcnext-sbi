import css from '../page.module.css'
export default function Footer() {
  return (
    <footer>
        <div className={css.footerArea}>
    <span
      style={{
        boxSizing: "border-box",
        display: "inline-block",
        overflow: "hidden",
        width: "initial",
        height: "initial",
        background: "none",
        opacity: 1,
        border: 0,
        margin: 0,
        padding: 0,
        position: "relative",
        maxWidth: "100%"
      }}
    >
      <span
        style={{
          boxSizing: "border-box",
          display: "block",
          width: "initial",
          height: "initial",
          background: "none",
          opacity: 1,
          border: 0,
          margin: 0,
          padding: 0,
          maxWidth: "100%"
        }}
      >
        <img
          style={{
            display: "block",
            maxWidth: "100%",
            width: "initial",
            height: "initial",
            background: "none",
            opacity: 1,
            border: 0,
            margin: 0,
            padding: 0
          }}
          alt=""
          aria-hidden="true"
          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2768%27%20height=%2728%27/%3e"
        />
      </span>
      <img
        alt="bengal"
        src="/assets/ver.png"
        decoding="async"
        data-nimg="intrinsic"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          boxSizing: "border-box",
          padding: 0,
          border: "none",
          margin: "auto",
          display: "block",
          width: 0,
          height: 0,
          minWidth: "100%",
          maxWidth: "100%",
          minHeight: "100%",
          maxHeight: "100%"
        }}
      />
    
    </span>
  </div>
  <div className={css.footer}>
    <p>© Copyright</p>
  </div>
    </footer>
  );
}
