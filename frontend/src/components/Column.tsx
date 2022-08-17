import React from "react";
import { ColumnContainer } from "./styles";
import { State } from '../utils/types';
import { connect } from "../utils/globalContext";

type Props = State & {
	columnNames: string[];
	defaultColumn: string;
};

const Column = ({ columnNames, defaultColumn, activeColumn, setState }: Props) => {
	useEffect(() => {
		setState({ activeColumn: defaultColumn });
	}, [defaultColumn, setState]);

    return ( 
    		<ColumnContainer>
        		<ColumnTitle> </ColumnTitle>
        		
        	</ColumnContainer> 
        );
	);
};

export default connect(Column);