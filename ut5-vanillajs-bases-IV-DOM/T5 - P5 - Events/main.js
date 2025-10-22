const buttons = document.querySelectorAll("button");

const action_primary = () => alert("Click Event");
const action_secondary = () => alert("Mouse Enter Event");
const action_success = () => alert("Mouse Up Event");
const action_danger = () => alert("Mouse Leave Event");
const action_warnig_change_to_danger = () => {
  buttons[4].className = "btn btn-danger";
};
const action_warnig_change_to_warnig = () => {
  buttons[4].className = "btn btn-warning";
};
const action_info_change_body_color_red = () => {
  document.body.style = "background-color: red";
};
const action_info_change_body_color_white = () => {
  document.body.style = "background-color: white";
};
const action_dark = () => {
  buttons.forEach((button) => {
    button.className = "btn btn-dark";
  });
};

buttons[0].addEventListener("click", action_primary);
buttons[1].addEventListener("mouseenter", action_secondary);
buttons[2].addEventListener("mouseup", action_success);
buttons[3].addEventListener("mouseleave", action_danger);
buttons[4].addEventListener("mouseenter", action_warnig_change_to_danger);
buttons[4].addEventListener("mouseleave", action_warnig_change_to_warnig);
buttons[5].addEventListener("click", action_info_change_body_color_red);
buttons[6].addEventListener("click", action_info_change_body_color_white);
buttons[7].addEventListener("click", action_dark);
