import * as React from "react";
import Prism from "prismjs";
import { RichText } from "@graphcms/rich-text-react-renderer";
import "prismjs/plugins/line-numbers/prism-line-numbers";

export interface AppWysiwygProps {
  content: any;
}

export const AppWysiwyg = (props: AppWysiwygProps) => {
  const { content } = props;

  // Life Cycle
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="wysiwyg">
      <RichText
        content={content}
        renderers={{
          code_block: ({ children }) => (
            <pre className="line-numbers language-js">
              <code className="language-js">{children}</code>
            </pre>
          )
        }}
      />
    </div>
  );
};
