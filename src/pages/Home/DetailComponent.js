import ComputerComponent from "./ComputerComponent";

// Define components for each item
const ComputerDetails = () => (
    <div>
        {/* <h2>Details about computers</h2> */}
        <ComputerComponent/>
    </div>
);

const HandToolsDetails = () => (
    <div>
        <p>Details about hand tools</p>
        {/* Add more details specific to hand tools */}
    </div>
);

const MachineToolsDetails = () => (
    <div>
        <p>Details about machine tools</p>
        {/* Add more details specific to machine tools */}
    </div>
);

// Map each item to its corresponding component
const itemComponents = {
    computer: ComputerDetails,
    handTools: HandToolsDetails,
    machineTools: MachineToolsDetails,
    // Add more items and components as needed
};
export const DetailComponent = ({sideNavSelectedItem})=>{

    const ItemComponent   =  itemComponents[sideNavSelectedItem];

    return (
        <div>
            {/* Render the component for the selected item */}
            {ItemComponent  && <ItemComponent />}
        </div>
    )
}