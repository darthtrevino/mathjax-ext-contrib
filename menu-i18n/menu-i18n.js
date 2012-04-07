MathJax.Hub.Register.StartupHook("MathMenu Ready",function () {

var MENU = MathJax.Menu;
var ITEM = MENU.ITEM;
var HUB = MathJax.Hub;
var CONFIG = HUB.config.MathMenu;

ITEM.Augment({
    labelTranslations: { },

    translateLabel : function(label) { 
      return (this.labelTranslations[label] || label); 
    }
});

ITEM.COMMAND.Augment({
      oldLabel: ITEM.COMMAND.prototype.Label,
      Label: function (def,menu) {
        var label = this.oldLabel.call(this,def,menu);
        label[0] = this.translateLabel(this.name)+" ";
        return label;
      }
});

ITEM.SUBMENU.Augment({
      oldLabel: ITEM.SUBMENU.prototype.Label,
      Label: function (def,menu) {
        var label = this.oldLabel.call(this,def,menu);
        label[0] = this.translateLabel(this.name)+" ";
        return label;
      }
});

ITEM.RADIO.Augment({
      oldLabel: ITEM.RADIO.prototype.Label,
      Label: function (def,menu) {
        var label = this.oldLabel.call(this,def,menu);
        label[1] = " "+this.translateLabel(this.name);
        return label;
      }
});

ITEM.CHECKBOX.Augment({
      oldLabel: ITEM.CHECKBOX.prototype.Label,
      Label: function (def,menu) {
        var label = this.oldLabel.call(this,def,menu);
        label[1] = " "+this.translateLabel(this.name);
        return label;
      }
});

ITEM.LABEL.Augment({
      oldLabel: ITEM.LABEL.prototype.Label,
      Label: function (def,menu) {
        var label = this.oldLabel.call(this,def,menu);
        label[0] = this.translateLabel(this.name)+" ";
        return label;
      }
});

if (CONFIG.menuTranslationFile) {
  MathJax.Hub.Queue(["Require",MathJax.Ajax,
                  CONFIG.menuTranslationFile]);
};

MathJax.Callback.Queue(["Post",MathJax.Hub.Startup.signal,
                   "MathMenu i18n Ready"]);

});

MathJax.Ajax.loadComplete("http://cs.jsu.edu/mathjax-ext/github/menu-i18n/menu-i18n.js");

