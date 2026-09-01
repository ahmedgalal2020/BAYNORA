class BaynoraMainMenu extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<div class="baynora-menu-loading">...</div>';
    salla.onReady()
      .then(() => salla.api.component.getMenus())
      .then(({ data }) => this.render(data || []))
      .catch(() => { this.innerHTML = ''; });
  }

  item(menu, depth = 0) {
    const children = menu?.children || [];
    return `<li class="${children.length ? 'has-children' : ''}">
      <a href="${menu.url || '#'}">${menu.title || ''}</a>
      ${children.length ? `<ul>${children.map(child => this.item(child, depth + 1)).join('')}</ul>` : ''}
    </li>`;
  }

  render(menus) {
    this.innerHTML = `<ul class="baynora-main-menu">${menus.map(menu => this.item(menu)).join('')}</ul>`;
  }
}

if (!customElements.get('custom-main-menu')) {
  customElements.define('custom-main-menu', BaynoraMainMenu);
}
