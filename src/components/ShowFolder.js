import React from 'react';
import Context from '../Context';

export default class ShowFolder extends React.Component {
  static contextType = Context;

  render() {
    const { folders } = this.context
    const ShowFolder = folders.map(folder => {
      const folderId = folder.id;
      const folderName = folder.name
      return (
      <option value={folderId}>{folderName}</option>
      )
    })
    return ShowFolder;
  }
}