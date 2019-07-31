'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var modalInitialState = {
    modal: {
        name: '',
        isOpen: null
    }
};

var modalActions = {
    OPEN_MODAL: function OPEN_MODAL(state, payload) {
        return _extends({}, state, {
            modal: _extends({}, state.modal, {
                name: payload.name,
                isOpen: true
            })
        });
    },
    CLOSE_MODAL: function CLOSE_MODAL(state) {
        return _extends({}, state, {
            modal: _extends({}, state.modal, {
                isOpen: false
            })
        });
    }
};

var customStyleInitialState = {
    customStyle: {
        modal: null
    }
};

var customStyleActions = {
    CUSTOM_MODAL_STYLE: function CUSTOM_MODAL_STYLE(state, payload) {
        return _extends({}, state, {
            customStyle: _extends({}, state.customStyle, {
                modal: payload.style
            })
        });
    }
};

var DwhCollectionsStateContext = React.createContext();
var DwhCollectionsDispatchContext = React.createContext();

var initialState = _extends({}, modalInitialState, customStyleInitialState);

var Actions = _extends({}, modalActions, customStyleActions);

var DwhCollectionsReducer = function DwhCollectionsReducer(state, action) {
    var act = Actions[action.type];
    var update = act(state, action.payload);
    return _extends({}, state, update);
};

var DwhCollectionsProvider = function DwhCollectionsProvider(props) {
    var _useReducer = React.useReducer(DwhCollectionsReducer, initialState),
        _useReducer2 = slicedToArray(_useReducer, 2),
        state = _useReducer2[0],
        dispatch = _useReducer2[1];

    return React__default.createElement(
        DwhCollectionsDispatchContext.Provider,
        { value: dispatch },
        React__default.createElement(
            DwhCollectionsStateContext.Provider,
            { value: state },
            props.children
        )
    );
};

var useModal = function useModal() {

    var state = React.useContext(DwhCollectionsStateContext);
    var dispatch = React.useContext(DwhCollectionsDispatchContext);

    var modalState = state.modal;

    var openModal = function openModal(name) {

        dispatch({
            type: 'OPEN_MODAL',
            payload: {
                name: name
            }
        });
    };

    var closeModal = function closeModal(event) {
        if (event) event.preventDefault();
        dispatch({
            type: 'CLOSE_MODAL'
        });
    };

    var stopCloseModal = function stopCloseModal(event) {
        event.stopPropagation();
    };

    return {
        openModal: openModal,
        closeModal: closeModal,
        stopCloseModal: stopCloseModal,
        modalState: modalState
    };
};

var useCustomStyle = function useCustomStyle() {

    var state = React.useContext(DwhCollectionsStateContext);
    var dispatch = React.useContext(DwhCollectionsDispatchContext);

    var componentStyle = state.customStyle;

    var customModalStyle = function customModalStyle(style) {
        dispatch({
            type: 'CUSTOM_MODAL_STYLE',
            payload: {
                style: style
            }
        });
    };

    return {
        componentStyle: componentStyle,
        customModalStyle: customModalStyle
    };
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".Modal_wrapper__3oG8l {\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.8);\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  align-items: center; }\n\n.Modal_container__3vtwr {\n  background: white;\n  max-width: 623px;\n  width: 80%;\n  height: 80%;\n  border-radius: 4px;\n  overflow: hidden; }\n\n.Modal_header__3jVSR {\n  background: #ddd;\n  padding: 16px 24px;\n  display: block;\n  position: relative; }\n  .Modal_header__3jVSR ~ [class*=\"content\"] {\n    height: calc(100% - 56px); }\n\n.Modal_content__1LnVv {\n  display: block;\n  position: relative;\n  padding: 32px 24px;\n  overflow-y: auto;\n  height: 100%; }\n  .Modal_content__1LnVv > *:last-child() {\n    padding-bottom: 0;\n    margin-bottom: 0; }\n";
var style = { "wrapper": "Modal_wrapper__3oG8l", "container": "Modal_container__3vtwr", "header": "Modal_header__3jVSR", "content": "Modal_content__1LnVv" };
styleInject(css);

var Modal = function Modal(_ref) {
    var name = _ref.name,
        header = _ref.header,
        children = _ref.children;

    var _useModal = useModal(),
        stopCloseModal = _useModal.stopCloseModal,
        closeModal = _useModal.closeModal,
        modalState = _useModal.modalState;

    var _useCustomStyle = useCustomStyle(),
        componentStyle = _useCustomStyle.componentStyle;

    var modalStyle = componentStyle.modal !== null ? componentStyle.modal : style;

    if (modalState.isOpen === true && name === modalState.name) {
        return React__default.createElement(
            'div',
            { className: modalStyle.wrapper, onClick: closeModal },
            React__default.createElement(
                'div',
                { className: modalStyle.container, onClick: stopCloseModal },
                header ? React__default.createElement(
                    'div',
                    { className: modalStyle.header },
                    header
                ) : null,
                React__default.createElement(
                    'div',
                    { className: modalStyle.content },
                    children
                )
            )
        );
    } else {
        return null;
    }
};

var css$1 = "/* BASE COLORS */\nhtml,\nbody {\n  margin: 0;\n  color: #000000;\n  font: 300 14px/24px BlinkMacSystemFont, -apple-system, Roboto, Helvetica, Arial, sans-serif;\n  height: 100%;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%; }\n  html #base_root__3kcng,\n  body #base_root__3kcng {\n    height: 100%; }\n  @media (max-width: 767.98px) {\n    html,\n    body {\n      font: 300 16px/24px BlinkMacSystemFont, -apple-system, Roboto, Helvetica, Arial, sans-serif; } }\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline; }\n\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n[hidden],\ntemplate {\n  display: none; }\n\na {\n  background-color: transparent; }\n\na:active,\na:hover {\n  outline: 0; }\n\nabbr[title] {\n  border-bottom: 1px dotted; }\n\nb,\nstrong {\n  font-weight: bold; }\n\ndfn {\n  font-style: italic; }\n\nmark {\n  color: inherit; }\n\nsmall {\n  font-size: 80%; }\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\nimg {\n  border: 0; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\nfigure {\n  margin: 1em 40px; }\n\nhr {\n  -webkit-box-sizing: content-box;\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0; }\n\npre {\n  overflow: auto; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  background: inherit;\n  color: inherit;\n  font: inherit;\n  margin: 0; }\n\nbutton {\n  overflow: visible; }\n\nbutton,\nselect {\n  text-transform: none; }\n\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer; }\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: primaryfont; }\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\ninput {\n  line-height: normal; }\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  padding: 0; }\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  -webkit-box-sizing: content-box;\n  -moz-box-sizing: content-box;\n  box-sizing: content-box; }\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\nlegend {\n  border: 0;\n  padding: 0; }\n\ntextarea {\n  min-height: 112px;\n  overflow: auto; }\n\noptgroup {\n  font-weight: bold; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\n* {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\ninput,\nbutton,\nselect,\ntextarea {\n  display: inline-block;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  vertical-align: middle;\n  padding: 8px;\n  margin: 0; }\n\ntextarea {\n  width: 100%; }\n\na {\n  text-decoration: none; }\n\na:hover,\na:focus {\n  text-decoration: none; }\n\na:focus {\n  outline: 16px auto -webkit-focus-ring-color;\n  outline-offset: -2px; }\n\nfigure {\n  margin: 0; }\n\nimg {\n  vertical-align: middle; }\n\nhr {\n  margin-top: 16px;\n  margin-bottom: 16px;\n  border: 0; }\n\nh1, h2, h3, h4, h5, h6 {\n  margin: 0; }\n\nh1 {\n  font: 700 24px/32px BlinkMacSystemFont, -apple-system, Roboto, Helvetica, Arial, sans-serif; }\n\nh2 {\n  font: 700 20px/24px BlinkMacSystemFont, -apple-system, Roboto, Helvetica, Arial, sans-serif; }\n\nh3 {\n  font: 700 18px/24px BlinkMacSystemFont, -apple-system, Roboto, Helvetica, Arial, sans-serif; }\n\nh4 {\n  font: 16px/24px BlinkMacSystemFont, -apple-system, Roboto, Helvetica, Arial, sans-serif; }\n\nh5 {\n  font: 16px/24px BlinkMacSystemFont, -apple-system, Roboto, Helvetica, Arial, sans-serif; }\n\nh6 {\n  font: 16px/24px BlinkMacSystemFont, -apple-system, Roboto, Helvetica, Arial, sans-serif; }\n\np, span, li, a {\n  margin: 0;\n  padding: 0; }\n\nul {\n  margin: 0 0 0 16px;\n  padding: 0; }\n";
styleInject(css$1);

var DwhCollections = function DwhCollections(props) {
    return React__default.createElement(
        DwhCollectionsProvider,
        null,
        props.children
    );
};

exports.Modal = Modal;
exports.useModal = useModal;
exports.useCustomStyle = useCustomStyle;
exports.default = DwhCollections;
//# sourceMappingURL=index.js.map
