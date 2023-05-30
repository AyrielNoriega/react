import { IconButton, Typography } from "@mui/material"
import { NoteView, NothingSelectedView } from "../../views"
import { JournalLayout } from "../layout/JournalLayout"
import { AddOutlined } from "@mui/icons-material";

export const JournalPage = () => {
    console.log('JournalPage');
    return (
        <JournalLayout>
            {/* <Typography>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography> */}
            <NothingSelectedView />
            {/* <NoteView /> */}

            <IconButton
                size="large"
                sx={{
                    color: 'white',
                    backgroundColor: 'error.main',
                    ':hover': { backgroundColor: 'error.main', opacity: 0.9},
                    position: 'fixed',
                    right: 50,
                    bottom: 50
                }}
            >
                <AddOutlined sx={{ fontSize: 30 }}/>
            </IconButton>
        </JournalLayout>
    )
}
