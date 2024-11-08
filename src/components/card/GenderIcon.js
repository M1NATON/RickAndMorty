import { ReactComponent as Male } from '../../assets/genders/male.svg';
import { ReactComponent as Female } from '../../assets/genders/female.svg';
import { ReactComponent as Genderless } from '../../assets/genders/genderless.svg';

export function GenderIcon({ gender }) {
  switch (gender) {
    case 'Male':
      return <Male width={20} height={20} fill="#33b3c8" title="Male" />;
    case 'Female':
      return <Female width={24} height={24} fill="pink" title="Female" />;
    case 'unknown':
      return (
        <Genderless width={24} height={24} fill="#999" title="Genderless" />
      );
    default:
      return null;
  }
}
