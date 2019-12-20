import React from 'react'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import MyButton from './MyButton';
import MasterForm from './MasterForm';
import MyTable from './MyTable';
import MyVictoryCharts from './MyVictoryChart';
import MyMaterialUIComponent from './MyMaterialUIComponent';
import MyBadges from './MyBadges'
import MyForms from './MyForms';


class MyTabs extends React.Component {


    render() {

        return (
            <Tabs>
                <Tab eventKey="home" title="Button Group">
                    <MyButton></MyButton>
                </Tab>
                <Tab eventKey="multistepForm" title="MultiStep Form">
                    <MasterForm></MasterForm>
                </Tab>
                <Tab eventKey="oldForm" title="Old Form To Split">
                    <MyForms></MyForms>
                </Tab>
                <Tab eventKey="table" title="Table" >
                    <MyTable></MyTable>
                </Tab>
                <Tab eventKey="chart" title="Charts">
                    <MyVictoryCharts />

                </Tab>
                <Tab eventKey="material" title="Material UI">
                    <MyMaterialUIComponent></MyMaterialUIComponent>
                </Tab>
                <Tab eventKey="badges" title="My badges">
                    <MyBadges></MyBadges>
                </Tab>


            </Tabs>


        );

    }


}

export default MyTabs;