import { LightningElement } from "lwc";

class Context extends LightningElement {
  context = {};

  connectedCallback() {
    this.template.addEventListener("context_update", this.handleContextUpdate);
  }

  handleContextUpdate = (event) => {
    this.context = { ...this.context, ...event.detail };
  };
}

export const withContext = () => {
  return Context;
};

/**
 *  Usage: updateContext(this, {payload})
 */
export const updateContext = (component, payload) => {
  if (component && component.dispatchEvent) {
    component.dispatchEvent(
      new CustomEvent("context_update", {
        detail: payload,
        bubbles: true,
        composed: false
      })
    );
  }
};
