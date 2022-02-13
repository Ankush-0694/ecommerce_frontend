import { useNavigate , useParams, useLocation   } from 'react-router-dom';

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const Navigate = useNavigate();
    const params = useParams();
    const location = useLocation();

    return (
      <Component
        Navigate={Navigate}
        params={params}
        location={location}
        {...props}
        />
    );
  };
  
  return Wrapper;
};