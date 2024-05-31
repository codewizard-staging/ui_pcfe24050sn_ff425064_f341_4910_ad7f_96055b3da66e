import React from "react";
import { Routes, Route } from "react-router-dom";
import {
PetCareCenters, 
PetCareCenterCreate, PetCareCenterEdit, PetCareCenterView, 
PetCareCenterTiles
} from "screens";

const Component = (props) => {

    return (
        <Routes>
            

                        
                                                                                    <Route path="/" element={<PetCareCenters {...props} title={'Table Layout'} nolistbar={true} />} />
                                            <Route path="PetCareCenters/view/:id" element={<PetCareCenterView {...props} title={'View PetCareCenter'} />} />
                        <Route path="PetCareCenters/edit/:id" element={<PetCareCenterEdit {...props} title={'Edit PetCareCenter'} />} />
                        <Route path="PetCareCenters/create" element={<PetCareCenterCreate {...props} title={'Create PetCareCenter'} />} />

                                                                                                                <Route path="/pc/tiles" element={<PetCareCenterTiles {...props} title={'Tiles'} />} />
                <Route path="/petcarecenters" element={<PetCareCenters {...props} title={'Table Layout'} />} />
                                                                                                        </Routes>
    )

};

export default Component;