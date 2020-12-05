import { useMemo, useState } from 'react';
import localStore from '../Helpers/LocalStore';

const UseRegister = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [values, setValue] = useState({ username: '', preference: '' });
	const [RegisterErrors, setRegisterErrors] = useState('');
	const [user, setUser] = useState(null);

	const showModal = () => {
		setIsOpen(!isOpen);
	};

	const hideModal = () => {
		setIsOpen(!isOpen);
	};

	const handleInput = ({ target }) => {
		setValue({ ...values, [target.id]: target.value });
	};
	const handleSubmit = () => {
		setRegisterErrors('');
		Object.entries(values).map((val) => !val[1] && setRegisterErrors(`${val[0]} field is reqired`));
		if (values.username && values.preference) {
			localStore.storeUser(values);
			setUser(values);
			setIsOpen(!isOpen);
		}
	};

	useMemo(() => {
		setUser(localStore.getUser());
	}, []);

	const logOut = () => {
		localStore.removeUser();
		setUser(null);
	};

	return { isOpen, RegisterErrors, user, showModal, hideModal, handleInput, handleSubmit, logOut };
};

export default UseRegister;
