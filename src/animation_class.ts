class AnimationCard {
  private title: string;
  private desc: string;
  private image: string;
  private link: string;

  public constructor(title: string, desc: string, image: string, link: string) {
    this.title = title;
    this.desc = desc;
    this.image = image;
    this.link = link;
  }

  render() {
    let card_div = document.createElement("a") as HTMLAnchorElement;
    let content_div = document.createElement("div");
    let desc_div = document.createElement("div");

    card_div.className = "card";
    card_div.href = this.link;

    content_div.className = "card-content";
    content_div.innerHTML = `
        <h3 class="card-title"> ${this.title} </h3>
        <img src="public/${this.image}" class="content-image"/>
      `;

    desc_div.className = "card-overlay";
    desc_div.innerHTML = `<div class="card-overlay-content">${this.desc}</div>`;

    card_div.appendChild(desc_div);
    card_div.appendChild(content_div);

    return card_div;
  }
}

export { AnimationCard };
