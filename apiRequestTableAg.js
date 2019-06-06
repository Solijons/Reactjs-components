class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [{
        headerName: '#', field: 'id', sortable: true, filter: true, checkboxSelection: true, width: 60,
      },
      {
        headerName: 'Text',
        field: 'id',
        cellRenderer(params) {
          return `<a href="/url?id=${params.value}"><button class="custom-btn">TEXT</button></a><a style="margin-left:10px;" href="/url?id=${params.value}"><button class='custom-btn btn-def'>TEXT</button></a>`}
      },
      {
        headerName: 'Text', field: 'jsonField', sortable: true, filter: true, editable: true, width: 220,
      },
      {
        headerName: 'Text', field: 'jsonField', sortable: true, filter: true, editable: true, width: 130,
      },
      {
        headerName: 'Text', field: 'jsonField', sortable: true, filter: true, editable: true, width: 160,
      },
      {
        headerName: 'Text', field: 'jsonField', sortable: true, filter: true, editable: true, width: 260,
      },
      {
        headerName: 'Text', field: 'jsonField', sortable: true, filter: true, editable: true, width: 160,
      },
      {
        headerName: 'Text', field: 'jsonField', sortable: true, filter: true, editable: true, width: 140,
      },
      ],
      rowSelection: 'multiple',
    };
  }

  componentDidMount() {
    fetch(`${API_URL}`)
      .then((result) => result.json())
      .then((rowData) => this.setState({ rowData }));
  }

  render() {
    const { columnDefs, rowData, rowSelection } = this.state;
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <Component />
        <div
          id="myGrid"
          style={{
            height: '100%',
            width: '100%',
          }}
          className="ag-theme-balham"
        >
          <AgGridReact
            onCellClicked={this.handleClick}
            columnDefs={columnDefs}
            rowData={rowData}
            onGridReady={this.onGridReady}
            rowSelection={rowSelection}
          />
        </div>
      </div>
    );
  }
}

export default Table;
