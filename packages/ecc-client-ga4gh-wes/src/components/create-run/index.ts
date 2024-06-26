import ECCClientGa4ghWesCreateRuns from "./create-run.js";

export * from "./create-run.js";
export default ECCClientGa4ghWesCreateRuns;

window.customElements.define(
  "ecc-client-ga4gh-wes-create-run",
  ECCClientGa4ghWesCreateRuns
);

declare global {
  interface HTMLElementTagNameMap {
    "ecc-client-ga4gh-wes-create-run": ECCClientGa4ghWesCreateRuns;
  }
}
