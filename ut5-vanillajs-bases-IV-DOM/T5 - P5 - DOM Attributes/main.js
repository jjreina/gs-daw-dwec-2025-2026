const LIST_GROUP_ITEM = "list-group-item";
const LIST_GROUP_ITEM_ACTION = "list-group-item-action";

const body = document.querySelector("body");
// body.classList = "p-3 m-0 border-0 bd-example";
body.classList.add("p-3", "m-0", "border-0", "bd-example");

const div = document.createElement("div");
div.className = "list-group";

const styles = [
  LIST_GROUP_ITEM + " " + LIST_GROUP_ITEM_ACTION,
  LIST_GROUP_ITEM + " " + LIST_GROUP_ITEM_ACTION + " list-group-item-primary",
  LIST_GROUP_ITEM + " " + LIST_GROUP_ITEM_ACTION + " list-group-item-secondary",
  LIST_GROUP_ITEM + " " + LIST_GROUP_ITEM_ACTION + " list-group-item-success",
  LIST_GROUP_ITEM + " " + LIST_GROUP_ITEM_ACTION + " list-group-item-danger",
  LIST_GROUP_ITEM + " " + LIST_GROUP_ITEM_ACTION + " list-group-item-warning",
  LIST_GROUP_ITEM + " " + LIST_GROUP_ITEM_ACTION + " list-group-item-info",
  LIST_GROUP_ITEM + " " + LIST_GROUP_ITEM_ACTION + " list-group-item-light",
  LIST_GROUP_ITEM + " " + LIST_GROUP_ITEM_ACTION + " list-group-item-dark",
];

const texts = [
  "A simple default list group item",
  "A simple primary list group item",
  "A simple secondary list group item",
  "A simple success list group item",
  "A simple danger list group item",
  "A simple warning list group item",
  "A simple info list group item",
  "A simple light list group item",
  "A simple dark list group item",
];

styles.forEach((style, i) => {
  let anchor = document.createElement("a");
  anchor.className = style;
  anchor.href = "#";
  anchor.textContent = texts[i];
  div.append(anchor);
});

body.append(div);
