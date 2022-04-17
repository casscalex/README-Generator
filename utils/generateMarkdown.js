function generateMarkdown(data) {
    return `# ${data.title}
    
    ## Description
    ${data.description}

    ## Made With Love By
    ${data.username}`;
}

module.exports = generateMarkdown;