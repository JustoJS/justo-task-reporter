"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _colors = require("colors");

var _colors2 = _interopRequireDefault(_colors);

var _ConsoleReporter2 = require("./ConsoleReporter");

var _ConsoleReporter3 = _interopRequireDefault(_ConsoleReporter2);

var DEFAULT_THEME = {
  report: {
    header: {
      title: {
        color: "yellow"
      },
      pre: {
        text: "■ ",
        color: "yellow"
      },
      post: {
        text: "",
        color: "yellow"
      }
    },
    footer: {
      pre: {
        text: "---",
        color: "yellow"
      },
      post: {
        text: "---",
        color: "yellow"
      }
    }
  },
  task: {
    header: {
      title: {
        color: "yellow"
      },
      pre: {
        text: "♦ ",
        color: "yellow"
      }
    },
    result: {
      ok: {
        text: "✓",
        color: "green"
      },
      failed: {
        text: "✗",
        color: "red"
      },
      ignored: {
        text: "#",
        color: "gray"
      }
    }
  }
};

var ColoredConsoleReporter = (function (_ConsoleReporter) {
  _inherits(ColoredConsoleReporter, _ConsoleReporter);

  function ColoredConsoleReporter() {
    _classCallCheck(this, ColoredConsoleReporter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _get(Object.getPrototypeOf(ColoredConsoleReporter.prototype), "constructor", this).apply(this, args);
  }

  _createClass(ColoredConsoleReporter, [{
    key: "initTheme",
    value: function initTheme(theme) {
      Object.defineProperty(this, "theme", { value: Object.assign({}, DEFAULT_THEME, theme), enumerable: true });

      if (theme) {
        if (theme.report) {
          var report = theme.report;

          this.theme.report.header = Object.assign({}, DEFAULT_THEME.report.header, report.header);
          this.theme.report.footer = Object.assign({}, DEFAULT_THEME.report.footer, report.footer);

          if (report.header) {
            this.theme.report.header.title = Object.assign({}, DEFAULT_THEME.report.header.title, report.header.title);
            this.theme.report.header.pre = Object.assign({}, DEFAULT_THEME.report.header.pre, report.header.pre);
            this.theme.report.header.post = Object.assign({}, DEFAULT_THEME.report.header.post, report.header.post);
          }

          if (report.footer) {
            this.theme.report.footer.pre = Object.assign({}, DEFAULT_THEME.report.footer.pre, report.footer.pre);
            this.theme.report.footer.post = Object.assign({}, DEFAULT_THEME.report.footer.post, report.footer.post);
          }
        }

        if (theme.task) {
          var task = theme.task;

          if (task.header) {
            this.theme.task.title = Object.assign({}, DEFAULT_THEME.task.title, task.title);
            this.theme.task.header = Object.assign({}, DEFAULT_THEME.task.header, task.header);
            this.theme.task.header.pre = Object.assign({}, DEFAULT_THEME.task.header.pre, task.header.pre);
          }

          if (task.result) {
            this.theme.task.result = Object.assign({}, DEFAULT_THEME.task.result, task.result);
            this.theme.task.result.ok = Object.assign({}, DEFAULT_THEME.task.result.ok, task.result.ok);
            this.theme.task.result.failed = Object.assign({}, DEFAULT_THEME.task.result.failed, task.result.failed);
            this.theme.task.result.ignored = Object.assign({}, DEFAULT_THEME.task.result.ignored, task.result.ignored);
          }
        }
      }
    }
  }, {
    key: "formatReportTitle",
    value: function formatReportTitle(title) {
      return _colors2["default"][this.theme.report.header.title.color](title);
    }
  }, {
    key: "formatTaskTitle",
    value: function formatTaskTitle(title) {
      return _colors2["default"][this.theme.task.header.title.color](title);
    }
  }, {
    key: "formatResult",
    value: function formatResult(result) {
      return _colors2["default"][this.theme.task.result[result].color](this.theme.task.result[result].text);
    }
  }], [{
    key: "DEFAULT_THEME",
    get: function get() {
      return DEFAULT_THEME;
    }
  }]);

  return ColoredConsoleReporter;
})(_ConsoleReporter3["default"]);

exports["default"] = ColoredConsoleReporter;
module.exports = exports["default"];