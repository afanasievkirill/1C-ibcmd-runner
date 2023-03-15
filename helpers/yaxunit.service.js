const getYaxUnitLine = async (args) => {
	return [
		`/N"test-user"`,
		`/P"password"`,
		`/IBConnectionString``"Srvr=""msk-sbc-1c-0001:2541"";Ref=""billing_stage"";"`,
		`/C"RunUnitTests=C:\work\yaxunit-conf.json"`,
	];
};

export { getYaxUnitLine };
