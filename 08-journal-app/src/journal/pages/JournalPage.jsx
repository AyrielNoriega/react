import { Typography } from "@mui/material"
import { NothingSelectedView } from "../../views"
import { JournalLayout } from "../layout/JournalLayout"

export const JournalPage = () => {
    return (
        <JournalLayout>
            {/* <Typography>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography> */}
            <NothingSelectedView />
        </JournalLayout>
    )
}
