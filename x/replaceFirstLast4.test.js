const replaceFirstLast = require ('../units/units/replaceFirstLast')

test ('[T2] Replace first and last', () =>{
    expect(replaceFirstLast('')).toBe('')
    expect(replaceFirstLast('Hello')).toBe('oellH')
    expect(replaceFirstLast('A')).toBe('')
    expect(replaceFirstLast('MapleQA')).toBe('AapleQM')
    expect(replaceFirstLast('   A ')).toBe('')
} )

