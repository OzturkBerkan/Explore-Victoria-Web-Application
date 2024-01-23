import { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ITEMS = ['Photography', 'Clubs', 'Volleyball', 'Cooking', 'Gardening', 'Volunteering', 'Yoga', 'Painting', 'Musical Instruments', 'Singing', 'Hiking', 'Baking', 'Camping', 'Reading', 'Animals', 'Drawing', 'Entertainment', 'Politics', 'Tech', 'Fitness', 'Food', 'Science', 'Travel', 'Health', 'Comedy', 'Music', 'TV', 'Movies', 'Art', 'Sports', 'Ice Skating', 'Skateboarding', 'Fishing', 'Board Games', 'Brewery', 'Video Games', 'Writing']


export default function GroupButtons() {

    return (
        <>
            {ITEMS.map(item => <CustomButton value={item}>{item}</CustomButton>)}
        </>
    );
};

function CustomButton({ value, children, ...props }) {
    var interests = localStorage.getItem('profile') ? JSON.parse(localStorage.getItem('profile')).interests : [];

    var clickState = interests.includes(value) ? true: false;

    const [toggleVariant, setVariant] = useState(clickState);
    const variant = toggleVariant ? "primary" : "outline-primary";

    const toggleButton = () => {
        var profile = localStorage.getItem('profile') ? JSON.parse(localStorage.getItem('profile')) : [];
        
        //console.log(profile.interests)

        if (profile.interests.includes(value)) {
            const index = profile.interests.indexOf(value);
            if (index > -1) {
                profile.interests.splice(index, 1);
            }
        }
        else {
            profile.interests.push(value)
        }

        localStorage.setItem('profile', JSON.stringify(profile));
        setVariant(!toggleVariant);
    };

    return (
        <>
            <Button
                style={{ padding: '0.25rem', margin: '0.2rem' }}
                {...props}
                onClick={toggleButton}
                variant={variant}>
                {children}
            </Button>{'  '}
        </>
    )
}