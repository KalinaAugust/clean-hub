import './logo.scss';
import {useNavigate} from 'react-router-dom';
export const Logo = ({ colorScheme = 'is-header' }) => {
    const navigate = useNavigate();

	return (
		<div
            className={`logo ${colorScheme}`}
            onClick={() => navigate('/')}
        >
            <span className="logo__first-word">Clean</span>
            <span className="logo__second-word">Hub</span>
        </div>
	)
}
