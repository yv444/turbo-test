declare module "*.module.css" {
  // eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style -- This is a declaration file
  const styles: { [className: string]: string };
  export default styles;
}
