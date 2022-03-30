import '../../style/PrintableRecipe.css';

export const isSafari = () =>
  /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
const pagePrintStyleDefault = '';

const DEFAULT_PRINT_WINDOW_DIMENSIONS = {
  width: 850,
  height: 1100
};

const openCenteredPopupWindow = (
  windowName = "",
  url = "",
  w = DEFAULT_PRINT_WINDOW_DIMENSIONS.width,
  h = DEFAULT_PRINT_WINDOW_DIMENSIONS.height
) => {
  const y = window.top.outerHeight / 2 + window.top.screenY - h / 2;
  const x = window.top.outerWidth / 2 + window.top.screenX - w / 2;
  return window.open(
    url,
    windowName,
    `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no, width=${w}, height=${h}, top=${y}, left=${x}`
  );
};

/**
 * Ref:https://github.com/gregnb/react-to-print/blob/master/src/index.tsx#L372
 */
const copyStyles = (targetDocument) => {
  const headEls = document.querySelectorAll("style, link[rel='stylesheet']");

  for (let i = 0, headElsLen = headEls.length; i < headElsLen; i += 1) {
    const node = headEls[i];

    if (node.tagName === "STYLE") {
      const styleEl = targetDocument.createElement(node.tagName);
      const { sheet } = node;

      if (sheet) {
        let styleCSS = "";
        for (let j = 0, cssLen = sheet.cssRules.length; j < cssLen; j += 1) {
          if (typeof sheet.cssRules[j].cssText === "string") {
            styleCSS += `${sheet.cssRules[j].cssText}\r\n`;
          }
        }
        styleEl.appendChild(targetDocument.createTextNode(styleCSS));
        targetDocument.head.appendChild(styleEl);
      }
    } else {
      // eslint-disable-next-line no-console
      console.warn(
        "Encountered invalid HTML. This can cause problems in many browsers, and so the <link> was not loaded. The <link> is:",
        node
      );
    }
  }
};

const getSafariPrintHandler = (componentRef, documentTitle) => () => {
  const popupWindow = openCenteredPopupWindow(documentTitle);
  const printDoc = popupWindow.document;
  printDoc.write(`
        <!DOCTYPE>
        <html>
        <head>
            <title>${documentTitle}</title>
        </head>
        <body>
        ${componentRef.current.innerHTML}
        </body>
        </html>
    `);

  const styleEl = printDoc.createElement("style");
  styleEl.appendChild(printDoc.createTextNode(pagePrintStyleDefault));
  printDoc.head.appendChild(styleEl);

  // copy styles from parent window
  copyStyles(printDoc);

  // clean up
  printDoc.close();
  //popupWindow.print();
};

export const usePrint = (componentRef, documentTitle) => {
  if (isSafari()) {
    return getSafariPrintHandler(componentRef, documentTitle);
  }
  // otherwise call useReactToPrint() as usual
};
