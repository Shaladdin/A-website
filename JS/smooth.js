var y_window;

const option = {
    damping: 0.08,
    thumbMinSize: 5
}

// see also: https://github.com/idiotWu/react-smooth-scrollbar/issues/15#issuecomment-335047892

class DisableScrollPlugin extends Scrollbar.ScrollbarPlugin {
  static pluginName = 'disableScroll';

  static defaultOptions = {
    direction: '',
  };

  transformDelta(delta) {
    if (this.options.direction) {
      delta[this.options.direction] = 0;
    }

    return { ...delta };
  }
}

// load the plugin
Scrollbar.use(DisableScrollPlugin);

// usage
const scroll = Scrollbar.init(document.querySelector('.smooth'), {
  plugins: {
    disableScroll: {
      direction: 'x',
    },
  },
});


var OS = [];
scroll.addListener(function (status) {
    y_window = scroll.scrollTop;

    for (let i = 0; i < OS.length; i++)
        OS[i]();

})