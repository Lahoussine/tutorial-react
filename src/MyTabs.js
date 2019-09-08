import React from 'react'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import MyButton from './MyButton';
import MasterForm from './MasterForm';
import MyTable from './MyTable';


class MyTabs extends React.Component{


    render(){

        return(
                <Tabs>
                    <Tab eventKey="home" title="Button Group">
                        <MyButton></MyButton>
                    </Tab>
                    <Tab eventKey="multistepForm" title="MultiStep Form">
                        <MasterForm></MasterForm>
                    </Tab>
                    <Tab eventKey="table" title="Table" >
                        <MyTable></MyTable>
                    </Tab>
                    <Tab eventKey="chart" title="Charts">
                        Currently in development

                    </Tab>



                </Tabs>


        );

    }


}

export default MyTabs;