import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import ItemForm from "./ItemForm";

export function EducationEditor({onAddItem, EduData, onEditItem, onRemoveItem}) {
    const [EduObject, setEduObject] = useState({
        Organisation: '',
        degree: '',
        startDate: '',
        endDate: '',
        location: '',
    })
    function handleAddEduObject (e) {
        const {name, value} = e.target;
        setEduObject({
          ...EduObject, [name]: value
        })
      }
    return (
        <>
        <h2 className="form-header">Education</h2>
            {EduData.length > 0 && EduData.map((data) => {
                return <ItemForm
                    key={data.id}
                    item={data}
                    onSave={onEditItem}
                    onRemove={onRemoveItem}
                />
            })}
            <form className="form-container" onSubmit={(e) => {
                e.preventDefault();
                onAddItem({...EduObject, id: uuidv4()});
                setEduObject({
                    Organisation: '',
                    degree: '',
                    startDate: '',
                    endDate: '',
                    location: ''
                });
            }}>
                <label className="form-label" htmlFor="Organisation">
                    <span>Organisation</span>
                    <input type="text" value={EduObject.Organisation} onChange={handleAddEduObject} id="Organisation" name="Organisation" placeholder="University name" required></input>
                </label>
                <label className="form-label" htmlFor="degree">
                    <span>Degree</span>
                    <input type="text" id="degree" value={EduObject.degree} onChange={handleAddEduObject} name="degree" placeholder="Bachelor/Diploma" required></input>
                </label>
                <label className="form-label" htmlFor="startDate">
                    <span>Start Date</span>
                    <input type="text" id="startDate" placeholder="MM/YYYY" value={EduObject.startDate} onChange={handleAddEduObject}  name="startDate" required></input>
                </label>
                <label className="form-label" htmlFor="endDate">
                    <span>End Date</span>
                    <input type="text" id="endDate" placeholder="MM/YYYY" value={EduObject.endDate} onChange={handleAddEduObject} name="endDate" required></input>
                </label>
                <label className="form-label" htmlFor="location">
                    <span>Location</span>
                    <input type="text" id="location" value={EduObject.location} onChange={handleAddEduObject} name="location" placeholder="Sydney NSW"></input>
                </label>
                <button type="submit">Add Education</button>
            </form>
        </>
    )
}