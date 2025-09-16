import { AnimationCard } from "./animation_class";

const blocks = {
  animations: [
    new AnimationCard(
      "Project 1 - Solar System / Martians New Home",
      `A new double feature! Beginning with a breathtaking view of our home star,
       watch how these planets can spin. Then, in the ground breaking sequel, will
       martians ever be able to find a new home?
      `,
      "solar_system_retextured.PNG",
      "solar-system.html",
    ),
  ],
};

const animation_disp = document.getElementById("animation-cards");

for (const anim_card of blocks.animations) {
  animation_disp.appendChild(anim_card.render());
}
