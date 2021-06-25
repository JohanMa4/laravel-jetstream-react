import React from 'react'
import ApplicationMark from '../JetStream/ApplicationMark';
import Banner from '../JetStream/Banner';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import NavLink from '../JetStream/NavLink';
import Dropdown from '../JetStream/Dropdown';
import DropdownLink from '../JetStream/DropdownLink';
import ResponsiveNavLink from '../JetStream/ResponsiveNavLink';
import { Inertia } from '@inertiajs/inertia';

const Header = () => null;
const Content = () => null;
const Footer = () => null;

AppLayout.Header = Header;
AppLayout.Content = Content;
AppLayout.Footer = Footer;

export default function AppLayout(props) {
    const { children } = props;
    const page = usePage();
    const showingNavigationDropdown = false;

    const header = children.find(el => el.type === Header);
    const content = children.find(el => el.type === Content);
    const footer = children.find(el => el.type === Footer);

    const switchToTeam = (team) => {
        Inertia.put(route('current-team.update'), {
            'team_id': team.id
        }, {
            preserveState: false
        })
    }

    const logout = (e) => {
        e.preventDefault();
        Inertia.post(route('logout'));
    }
    return (
        <div>
            <Banner />

            <div className="min-h-screen bg-gray-100">
                <nav className="bg-white border-b border-gray-100">
                    {/* Primary Navigation Menu */}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                {/* Logo */}
                                <div className="flex-shrink-0 flex items-center">
                                    <InertiaLink href={route('dashboard')}>
                                        <ApplicationMark className="block h-9 w-auto" />
                                    </InertiaLink>
                                </div>

                                {/* Navigation Links */}
                                <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                    <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                                        Dashboard
                                    </NavLink>
                                </div>
                            </div>

                            <div className="hidden sm:flex sm:items-center sm:ml-6">
                                <div className="ml-3 relative">
                                    {/* Teams Dropdown */}
                                    {page.props.jetstream.hasTeamFeatures &&
                                        <Dropdown align="right" width="60">
                                            <div>
                                                <span className="inline-flex rounded-md">
                                                    <button type="button" className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition">
                                                        {page.props.user.current_team?.name}

                                                        <svg className="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                                                        </svg>
                                                    </button>
                                                </span>
                                            </div>
                                            <div>
                                                <div className="w-60">
                                                    {/* Team Management */}
                                                    {page.props.jetstream.hasTeamFeatures &&
                                                        <div>
                                                            <div className="block px-4 py-2 text-xs text-gray-400">
                                                                Manage Team
                                                            </div>

                                                            {/* Team Settings */}
                                                            <DropdownLink href={route('teams.show', page.props.user.current_team)}>
                                                                Team Settings
                                                            </DropdownLink>
                                                            {page.props.jetstream.canCreateTeams &&
                                                                <DropdownLink href={route('teams.create')}>
                                                                    Create New Team
                                                                </DropdownLink>
                                                            }

                                                            <div className="border-t border-gray-100"></div>

                                                            {/* Team Swticher */}
                                                            <div className="block px-4 py-2 text-xs text-gray-400">
                                                                Switch Teams
                                                            </div>
                                                            {/* {page.props.user.all_teams.map((team) => {
                                                                <div key={team.id}>
                                                                    <form onSubmit={switchToTeam(team)}>
                                                                        <DropdownLink as="button">
                                                                            <div className="flex items-center">
                                                                                {(team.id === page.props.user.current_team_id) &&
                                                                                    <svg className="mr-2 h-5 w-5 text-green-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                                                }
                                                                                <div>{team?.name}</div>
                                                                            </div>
                                                                        </DropdownLink>
                                                                    </form>
                                                                </div>
                                                            })} */}
                                                        </div>
                                                    }

                                                </div>
                                            </div>
                                        </Dropdown>
                                    }
                                    {/* Settings Dropdown */}
                                    <div className="ml-3 relative">
                                        <Dropdown align="right" width="48">
                                            <div>
                                                {page.props.jetstream.managesProfilePhotos ?

                                                    <button className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition">
                                                        <img className="h-8 w-8 rounded-full object-cover" src={page.props.user.profile_photo_url} alt={page.props.user.name} />
                                                    </button>
                                                    :
                                                    <span className="inline-flex rounded-md">
                                                        <button type="button" className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition">
                                                            {page.props.user.name}

                                                            <svg className="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                                            </svg>
                                                        </button>
                                                    </span>
                                                }

                                            </div>

                                            <div>
                                                {/* Account Management */}
                                                <div className="block px-4 py-2 text-xs text-gray-400">
                                                    Manage Account
                                                </div>

                                                <DropdownLink href={route('profile.show')}>
                                                    Profile
                                                </DropdownLink>
                                                {page.props.jetstream.hasApiFeatures &&
                                                    <DropdownLink href={route('api-tokens.index')}>
                                                        API Tokens
                                                    </DropdownLink>
                                                }

                                                <div className="border-t border-gray-100"></div>
                                                {/* Authentication */}
                                                <form onSubmit={logout}>
                                                    <DropdownLink as="button">
                                                        Log Out
                                                    </DropdownLink>
                                                </form>
                                            </div>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                {header &&
                    <header className="bg-white shadow">
                        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                            {header ? header.props.children : null}
                        </div>
                    </header>
                }

                <main>
                    {children}
                </main>
            </div >
        </div >
    )
}
