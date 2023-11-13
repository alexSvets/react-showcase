export function Footer() {
  return (
    <footer className="page-footer grey darken-3">
      <div className="footer-copyright">
        <div className="container footer-info">
          © {new Date().getFullYear()} Copyright Text
          <a
            className="grey-text text-lighten-4 right"
            href="https://github.com/rantinta/react-showcase"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
