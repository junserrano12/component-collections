import React, { useState, useContext } from 'react';

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

var DwhCollectionsContext = React.createContext([{}, function () {}]);

var DwhCollectionsProvider = function DwhCollectionsProvider(props) {
  var _useState = useState({
    modal: {
      name: '',
      isOpen: null
    }
  }),
      _useState2 = slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  return React.createElement(
    DwhCollectionsContext.Provider,
    { value: [state, setState] },
    props.children
  );
};

var useModal = function useModal() {
    var _useContext = useContext(DwhCollectionsContext),
        _useContext2 = slicedToArray(_useContext, 2),
        state = _useContext2[0],
        setState = _useContext2[1];

    console.log(state);

    var modalState = state.modal;

    var openModal = function openModal(name) {
        console.log(name);
        console.log(state);
        setState(function (state) {
            return _extends({}, state, {
                modal: {
                    name: name,
                    isOpen: true
                }
            });
        });
    };

    var closeModal = function closeModal(event) {
        if (event) event.preventDefault();
        setState(function (state) {
            return _extends({}, state, {
                modal: {
                    isOpen: false
                }
            });
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

var css = ".Modal_wrapper__3oG8l {\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.8);\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  align-items: center; }\n\n.Modal_container__3vtwr {\n  background: white;\n  max-width: 623px;\n  width: 80%;\n  height: 80%;\n  border-radius: 4px;\n  overflow: hidden;\n  padding-bottom: 40px; }\n\n.Modal_header__3jVSR {\n  background: #f5f5f5;\n  padding: 16px 24px;\n  display: block;\n  position: relative;\n  height: 56px; }\n\n.Modal_content__1LnVv {\n  display: block;\n  position: relative;\n  padding: 32px 24px;\n  overflow-y: auto;\n  height: calc(100% - 56px); }\n  .Modal_content__1LnVv > *:last-child() {\n    padding-bottom: 0;\n    margin-bottom: 0; }\n";
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

    if (modalState.isOpen && name === modalState.name) {
        return React.createElement(
            'div',
            { className: style.wrapper, onClick: closeModal },
            React.createElement(
                'div',
                { className: style.container, onClick: stopCloseModal },
                React.createElement(
                    'div',
                    { className: style.header },
                    header
                ),
                React.createElement(
                    'div',
                    { className: style.content },
                    children
                )
            )
        );
    } else {
        return null;
    }
};

var DwhCollections = function DwhCollections(props) {
  return React.createElement(
    React.Fragment,
    null,
    props.children
  );
};

export default DwhCollections;
export { Modal, useModal, DwhCollectionsProvider };
//# sourceMappingURL=index.es.js.map
