'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('react');
require('prop-types');

var useModal = function useModal() {

    var openModal = function openModal(name) {
        console.log('open Modal');
    };

    var closeModal = function closeModal(event) {
        console.log('close modal');
    };

    var stopCloseModal = function stopCloseModal(event) {
        event.stopPropagation();
    };

    return {
        openModal: openModal,
        closeModal: closeModal,
        stopCloseModal: stopCloseModal
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
styleInject(css);

var Modal = function Modal(_ref) {
    var name = _ref.name,
        header = _ref.header,
        children = _ref.children;

    var _useModal = useModal(),
        stopCloseModal = _useModal.stopCloseModal,
        closeModal = _useModal.closeModal;

    // useEffect(() => {
    //     console.log('test')
    // }, [])

    {
        return null;
    }
};

var DwhCollections = function DwhCollections() {
  return 'test';
};

exports.default = DwhCollections;
exports.Modal = Modal;
exports.useModal = useModal;
//# sourceMappingURL=index.js.map
