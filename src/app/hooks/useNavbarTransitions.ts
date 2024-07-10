import { inView } from "@/app/utils/in-view";
import { useHover } from "@uidotdev/usehooks";
import { animate, spring, type AnimationOptionsWithOverrides } from "motion";
import { useEffect, useRef } from "react";

export const useNavbarTransition = () => {
  const defaultBackground = "rgba(236, 254, 255, 0.40)";
  const darkBlueNavbarBackground = "rgba(62, 148, 229, 0.10)";
  const darkRedNavbarBackground = "rgba(232, 85, 121, 0.10)";

  const textLightColor = "rgba(236, 254, 255, 1)";
  const textDarkColor = "rgba(21, 94, 117, 1)";
  const textRedColor = "rgba(190, 18, 60, 1)";

  const [navRef, isHoveringNav] = useHover<HTMLDivElement>();
  const navPointerRef = useRef<HTMLDivElement>(null);

  const navShadow = isHoveringNav
    ? "0px 0px 0px 0px rgba(0, 0, 0, 0.10), 0px 3px 6px 0px rgba(0, 0, 0, 0.10), 0px 12px 12px 0px rgba(0, 0, 0, 0.09), 0px 26px 16px 0px rgba(0, 0, 0, 0.05), 0px 46px 19px 0px rgba(0, 0, 0, 0.01), 0px 73px 20px 0px rgba(0, 0, 0, 0.00)"
    : "0px 4px 10px 0px rgba(0, 0, 0, 0.03)";

  useEffect(() => {
    const nav = document.querySelector("#nav") as HTMLElement;
    const navPointer = nav.querySelector(".nav-pointer") as HTMLElement;

    const animateOption: AnimationOptionsWithOverrides = { duration: 0.5, easing: [0.17, 0.55, 0.55, 1] };

    const handleInView = (elementId: string, backgroundColor: string, color: string, selector: string | null = null) => {
      inView(elementId, () => {
        animate(nav, { backgroundColor, color, opacity: 1 }, animateOption);
        makeActive(navPointer, selector ? document.querySelector(selector) as HTMLElement : null);
      });
    };

    handleInView("#header", defaultBackground, textDarkColor);
    handleInView("#projects", defaultBackground, textDarkColor);
    handleInView("#project-natanya", defaultBackground, textDarkColor, 'a[href="#projects"]');
    handleInView("#project-natatoko", darkRedNavbarBackground, textRedColor, 'a[href="#projects"]');
    handleInView("#work-govtech", darkBlueNavbarBackground, textLightColor, 'a[href="#work-experiences"]');
    handleInView("#work-buka", darkRedNavbarBackground, textLightColor, 'a[href="#work-experiences"]');
    handleInView("#work-experiences", darkBlueNavbarBackground, textLightColor, 'a[href="#work-experiences"]');
    handleInView("#latest-writings", darkBlueNavbarBackground, textLightColor, 'a[href="#latest-writings"]');
    inView("#writing-list", () => {
      animate(nav, { backgroundColor: darkBlueNavbarBackground, color: textLightColor, opacity: 1 }, animateOption);
      makeActive(navPointer, document.querySelector('a[href="#latest-writings"]') as HTMLElement);
    }, { amount: 0.1 });
    handleInView("#contact-me", "transparent", "transparent", 'a[href="#contact-me"]');

    let active: HTMLElement | null = nav.querySelector(".active");
    let isAnimating = false;

    function cleanActive() {
      nav?.querySelectorAll(".active")?.forEach?.((tab: Element) => (tab as HTMLElement).classList.remove("active"));
    }

    nav.querySelectorAll(".nav-item").forEach((tab: Element) => {
      tab.addEventListener("click", () => {
        isAnimating = true;
        cleanActive();
        (tab as HTMLElement).classList.add("active");
        active = tab as HTMLElement;
        makeActive(navPointer, active, true, "click");
      });
    });

    async function makeActive(pointer: HTMLElement, active: HTMLElement | null, toAnimate = true, event: string = "scroll") {
      if (isAnimating && event === "scroll") return;

      if (active === null) {
        cleanActive();
        animate(pointer, { opacity: 0 }, animateOption);
        return;
      }

      if (event !== "click") {
        nav?.querySelector(".active")?.classList?.remove("active");
        active.classList.add("active");
      }

      let { width } = active.getBoundingClientRect();
      const animation = !toAnimate
        ? {}
        : {
            easing: spring({
              damping: 20,
              stiffness: 300,
            }),
          };

      const { finished } = animate(
        pointer,
        {
          opacity: 1,
          height: `${active.offsetHeight}px`,
          width: `${Math.floor(width)}px`,
          top: `${active.offsetTop}px`,
          left: `${active.offsetLeft}px`,
        },
        animation
      );

      finished.then(() => {
        isAnimating = false;
      });
    }
  }, [isHoveringNav]);

  return [navRef, navShadow] as const;
};
