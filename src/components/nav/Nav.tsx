import * as React from 'react';
import { TabsMainContainer, TabsListContainer, TabsListEventContainer, TabsListTab, TabsListPanelsContainer, TabsPanelContent  } from "./Nav.styled.tsx";

const PortafolioTabs = () => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    };

    return (
        <TabsMainContainer>
            <TabsListPanelsContainer value={value}>
                <TabsListContainer>
                    <TabsListEventContainer onChange={handleChange} aria-label="Tabs for portafolio">
                    <TabsListTab label="Home" value="1" />
                    <TabsListTab label="About" value="2" />
                    <TabsListTab label="Projects" value="3" />
                    <TabsListTab label="Collabs" value="4" />
                    <TabsListTab label="Testimonials" value="5" />
                    <TabsListTab label="Experience" value="6" />
                    <TabsListTab label="Contact" value="7" />
                    </TabsListEventContainer>
                </TabsListContainer>
                <TabsPanelContent value="1">Home</TabsPanelContent>
                <TabsPanelContent value="2">About</TabsPanelContent>
                <TabsPanelContent value="3">Projects</TabsPanelContent>
                <TabsPanelContent value="4">Collabs</TabsPanelContent>
                <TabsPanelContent value="5">Testimonials</TabsPanelContent>
                <TabsPanelContent value="6">Experience</TabsPanelContent>
                <TabsPanelContent value="7">Contact</TabsPanelContent>
            </TabsListPanelsContainer>
        </TabsMainContainer>
    );
    
}

export { PortafolioTabs }