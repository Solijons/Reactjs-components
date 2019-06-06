const HighChartMain = () => {
  const [dummyVar, setDummyVar] = useState([]);
  const [dummyVar, setDummyVar] = useState([]);
  const [dummyVar, setDummyVar] = useState([]);
  const [dummyVar, setDummyVar] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}`)
      .then((results) => results.json())
      .then((data) => {
        const dummyValue = [];
        const dummyValue = [];
        const dummyValue = [];
        const dummyValue = [];

        data.forEach((value) => {
          dummyValue.push(value.jsonObject);
          dummyValue.push(value.jsonObject);
          dummyValue.push(value.jsonObject);
          dummyValue.push(value.jsonObject);
        });
        setDummyVar(dummyValue);
        setDummyVar(dummyValue);
        setDummyVar(dummyValue);
        setDummyVar(dummyValue);
      });
  }, []);


  return (
    <HighchartsReact
      highcharts={highcharts}
      options={{
        chart: {
          type: 'area',
        },
        title: {
          text: 'Dashboard Charts',
        },
        xAxis: {
          categories: passjsonObject,
        },
        credits: {
          enabled: false,
        },
        series: [{
          name: 'Green',
          data: passjsonObject,
          color: 'lightgreen',
        }, {
          name: 'Yellow',
          data: passjsonObject,
          color: 'yellow',
        }, {
          name: 'Red',
          data: passjsonObject,
          color: 'red',
        }],
      }}
    />
  );
};

export default HighChartMain;
