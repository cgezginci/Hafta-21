import PersonInformation from "./PersonInformation";

const personlistTypes = [
  {
    title: "Phone Numbers",
    fieldName: "phoneNumber",
    labelField: "name",
    valueField: "number",
  },
  {
    title: "Emails",
    fieldName: "emails",
    labelField: "name",
    valueField: "email",
  },
  {
    title: "Addresses",
    fieldName: "addresses",
    labelField: "name",
    valueField: "address",
  },
];

const Person = (props) => {
  return (
    <div className="person">
      <div className="side">
        <img className="avatar" src={props.avatar} alt="avatar" />
        <h1 className="person-name">{props.name}</h1>
      </div>
      <div className="info">
        {personlistTypes.map((listType) => {
          return (
            <PersonInformation
              key={listType.fieldName}
              type={listType}
              personData={props}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Person;
