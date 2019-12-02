@Component({
  tag: 'ion-title',
  styleUrl: 'title.scss',
  shadow: true
})
export class ToolbarTitle implements ComponentInterface {

  @Element() el!: HTMLElement;

  @Prop() color?: Color;
  @Prop() size?: 'large' | 'small';

  @Event() ionStyle!: EventEmitter<StyleEventDetail>;

  @Watch('size')
  protected sizeChanged() { this.emitStyle() }

  connectedCallback() { this.emitStyle() }

  private emitStyle() { ... }
  private getSize() { ... }
  private getMode() { ... }

  render() {
    const mode = this.getMode();
    const size = this.getSize();

    return (
      <Host
        class={{
          [mode]: true,
          [`title-${mode}`]: true,
          [`title-${size}`]: true,
          ...createColorClasses(this.color),
        }}
      >
        <div class="toolbar-title">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
