import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProfileState {
    name: string;
    email: string;
    avatar: string;
    phone: string;
    businessName: string;
    businessAddress: string;
    notifications: string;
    disableChats: boolean;
    disableFeedback: boolean;
}

const initialState: ProfileState = {
    name: 'Jared Palmer',
    email: 'example@acme.inc',
    avatar: '/placeholder-avatar.jpg',
    phone: '+1 (555) 555-5555',
    businessName: 'Acme Inc',
    businessAddress: '123 Main St, Anytown USA',
    notifications: 'all',
    disableChats: false,
    disableFeedback: false,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        updateProfile(state, action: PayloadAction<Partial<ProfileState>>) {
            return { ...state, ...action.payload };
        },
    },
});

export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;
