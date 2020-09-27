let active = 0;
let lights = document.querySelectorAll(".circle");

const switchLight = (currentLight) => {
  currentLight.classList.add(currentLight.getAttribute("color"));
};
const turnOffLight = (currentLight) => {
  currentLight.className = "circle";
};

const changeLight = () => {
  return new Promise((res) => {
    switchLight(lights[active]);
    setTimeout(() => {
      turnOffLight(lights[active]);
      active += 1;
      res(active);
    }, 2000);
  });
};

(async function () {
  try {
    await changeLight();
    await changeLight();
    await changeLight();
  } catch (err) {
    console.log(err);
  }
})();
