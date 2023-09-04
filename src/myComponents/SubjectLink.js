import {NavLink} from 'react-router-dom';

function SubjectLink(props) {
  return (
      <NavLink to={'/subject/'+String(props.SubjectLink)} className={props.ClassName}>
          <h2>{props.SubjectName}</h2>
      </NavLink>
  );
}

export default SubjectLink;