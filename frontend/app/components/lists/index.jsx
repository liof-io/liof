import React from 'react';
import { Grid, Cell } from 'rgx';
import BaseComponent from '../Base';
import List from './List';
import { Spacing } from 'material-ui/lib/styles';
import styles from '../../styles/lists/lists';

export default class Lists extends BaseComponent {

  state = {
    didFetchData: false,
    lists: this.props.lists
  }

  componentDidMount() {
    _fetchLists({})
  }

  _fetchLists: (data)->
    $.ajax
      url: Routes.lists_path()
      dataType: 'json'
      data: data
    .done @_fetchDataDone
    .fail @_fetchDataFail

  _fetchDataDone: (data, textStatus, jqXHR) ->
    return false unless @isMounted()
    @setState
      didFetchData: true
      lists: data

  _fetchDataFail: (xhr, status, err) =>
    console.error @props.url, status, err.toString()

  render() {
    const minWidth = 384;
    const gutter = Spacing.desktopGutterLess;

    return (
      <div style={styles.content}>

        <Grid gutter={gutter}>
          <Cell min={minWidth}><List /></Cell>
          <Cell min={minWidth}><List /></Cell>
        </Grid>
        <Grid gutter={gutter}>
          <Cell min={minWidth}><List /></Cell>
          <Cell min={minWidth}/>
        </Grid>

      </div>
    );
  }
}
