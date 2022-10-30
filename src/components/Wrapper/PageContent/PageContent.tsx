import React, { FC, ReactNode } from 'react';

interface PageContentProps {
  children: ReactNode;
}

const PageContent: FC<PageContentProps> = ({ children }) => (
  <div>{children}</div>
);

export default PageContent;
