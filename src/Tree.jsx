import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

const data = {
  id: 'root',
  name: 'Parent',
  children: [
    {
        id: '1',
        title: 'Node 1',
        children: [
          {
            id: '1.1',
            title: 'Node 1.1',
            children: [],
          },
          {
            id: '1.2',
            title: 'Node 1.2',
            children: [],
          },
        ],  
    },
    {
        id: '2',
        title: 'Node 2',
        children: [
          {
            id: '2.1',
            title: 'Node 2.1',
            children: [
                {
                    id: '2.1.1',
                    title: 'Node 2.1.1',
                    children: [],
                },
                {
                    id: '2.1.2',
                    title: 'Node 2.1.2',
                    children: [],
                },
            ],
          },
        ],
    },
  ],
};
  

export default function Tree() {
  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.title} >
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  return (
    <TreeView
      aria-label="rich object"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={['root']}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {renderTree(data)}
    </TreeView>
  );
}
